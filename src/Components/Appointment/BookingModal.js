import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({  treatment, setTreatment, refetch}) => {
    const {_id, name,description, quantity,  price } = treatment;
    const [user] = useAuthState(auth);
    const handleBooking = event => {
        event.preventDefault();
        
        const booking = {
            treatmentId: _id, 
            treatment: name,
            quantity:event.target.quantity.value,
            price,
            Description : description,
            customer: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value
        }
        console.log(booking)

        fetch('https://whispering-atoll-87890.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => { console.log(data)
                if(data.success){
                    toast(`Purchase Done`)
                }
                else{
                    toast.error(`Already Purshased `)
                }
                setTreatment(null);
                refetch();
            });
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" disabled defaultValue={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="quantity"  placeholder="quantity" defaultValue={quantity || 'avaiable quantity'}  className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled defaultValue={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;