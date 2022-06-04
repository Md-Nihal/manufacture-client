import React, { useEffect, useState } from 'react';
import ShowAllProduct from './ShowAllProduct';

const ManageAllProduct = () => {
    const[services,setServices]= useState([]);
    
    useEffect( ()=>{
        fetch('https://whispering-atoll-87890.herokuapp.com/service')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])
    return (
        <div className='add-service' id='addService'>
            <h1>Your Order</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 sm:justify-center mx-auto'>
            {
                services.map(service=> <ShowAllProduct
                    key={service._id}
                    service={service}
                ></ShowAllProduct>
                    
                    
                
                )
            }
            </div>
            
        </div>
    );
};

export default ManageAllProduct;