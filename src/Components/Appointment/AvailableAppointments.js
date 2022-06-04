
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../LogIn/Loading';

import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = () => {
    const [treatment, setTreatment] = useState(null);
    const { data: services,quantity, isLoading, refetch } = useQuery(['available'],() => fetch(`https://whispering-atoll-87890.herokuapp.com/service?=quantity${quantity}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                quantity={quantity}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch = {refetch}

            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;