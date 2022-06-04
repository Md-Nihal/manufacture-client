import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name,quantity,description, images, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <figure><img src={images} alt="Shoes" /></figure>
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    quantity!== 0
                        ? <span>{quantity} {quantity > 1 ? 'products' : 'product'}  available</span>
                        : <span className='text-red-500'>No Products available</span>
                }</p>
                <p>{description}</p>
                <p><small>Price: ${price}</small></p>
                
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        className=" btn btn-wide btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Purchase</label>
                </div>
            </div>
        </div>
    );
};

export default Service;