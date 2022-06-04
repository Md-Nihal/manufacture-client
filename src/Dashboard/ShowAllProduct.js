import React from 'react';

const ShowAllProduct = ({ service }) => {
    const { name, price, images, description } = service;
    const handleDelete = id => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res =>
                res.json()

            )
            .then(data => { console.log(data)
                if (data.deletedCount) {
                    alert('Deleted Successfully');
                    window.location.reload();
                }
            })
    }
    return (
        
        <div class="card w-96 bg-base-100 shadow-xl m-5">
            <figure class="px-10 pt-10">
                <img src={images} alt="tools" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Name: {name}</h2>
                <h2 class="card-title">Price: {price}</h2>
                <p>About: {description?.length>30?description.slice(0,100)+"...":description}</p>
                <div class="card-actions">
                <button onClick={()=> handleDelete(service._id)} className='btn btn-warning'>Delete {name} </button>
                </div>
            </div>
        </div>
    );
};

export default ShowAllProduct;