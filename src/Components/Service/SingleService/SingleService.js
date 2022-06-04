import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
  const { name, price, images, description, _id } = service;
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl my-5">
      <figure><img src={images} alt='' /></figure>
      <div class="card-body">
        <h2 class="card-title">Name: {name}</h2>
        <h2 class="card-title">Price: {price}</h2>
        <p className='px-3 py-2'>About: {description?.length > 30 ? description.slice(0, 100) + "..." : description}</p>
        <div class="card-actions justify-end">

        {/* <Link to={`/booking/${_id}`}>
                <button className='btn btn-warning'>Book {name} </button>
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SingleService;