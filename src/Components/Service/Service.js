import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';

const Service = () => {
    const[services,setServices]= useState([]);
    
    useEffect( ()=>{
        fetch('https://whispering-atoll-87890.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setServices(data.slice(0,6)))
    },[])
    return (
        <div className='text-center my-10'>
            <h1 className='text-4xl font-bold text-primary'>Our Products</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 sm:justify-center  lg:mx-40
            '>
            {
                services.map(service=> <SingleService
                    key={service._id}
                    service={service}
                    ></SingleService>
                )
            }
            </div>
        </div>
        
    );
};

export default Service;