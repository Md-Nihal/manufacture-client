import React, { useEffect, useState } from 'react';

import Reviews from './Reviews';


const GetReview = () => {
    
    const [reviews, setReview]= useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/reviewData')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    console.log(reviews,"reviews")
    return (
        <div  >
            <h1 className='text-4xl font-bold text-primary text-center my-5'>Our Client Review's</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 sm:justify-center mx-auto'>
            {
                reviews.map(review =>  <Reviews
                key={review._id}
                review={review}
                // refetch={refetch}
            ></Reviews>
                    
                )
            }
            </div>
        </div>
    );
};

export default GetReview;