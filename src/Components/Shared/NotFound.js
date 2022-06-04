import React from 'react';
import error from '../../assets/images/error.jpg'
const NotFound = () => {
    return (
        <div className=' mx-auto'>
            <h1 className='text-center text-5xl m-5 font-semibold text-secondary'>Page not found!!!</h1>
            <img className='w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;