import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddReview = () => {
    const [Services,setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        
        console.log(data.email)
        console.log(handleSubmit)

        axios.post('http://localhost:5000/reviewData', data)
        .then(res=>{
            if (res.data.insertedId){
                toast(`Rated Successfully `)
                reset();
            }
        })
    };
    return (
        <div className='m-5 p-5'>
            <div className='grid'>
                <div className='grid-cols-3 gap-4 text-center'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='my-2 input input-bordered input-accent  w-full max-w-xs' {...register("name")} placeholder='Product Name'  /><br/>
                        <input className=' my-2 input input-bordered input-accent w-full max-w-xs' {...register("yourReview")} placeholder='Your Review' /><br/>
                        <input  className='my-2 input input-bordered input-accent w-full max-w-xs'{...register("rating")} type="number" placeholder='Rating' /><br/>
                        <input type="submit" value="Submit" className="btn btn-dark w-full max-w-xs" />
                    </form>
                
                </div>
            </div>
        </div>
    );
}

export default AddReview;