import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import ReactStars from "react-rating-stars-component";
import auth from '../../../firebase.init';

const Reviews = ({ review }) => {
    console.log(review)

    const { name, yourReview, rating } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl m-5">

            <div class="card-body items-center text-center text-white bg-secondary">
                <h2 class="card-title">Product Name: {name}</h2>
                <h2>Review: {yourReview}</h2>
                <h5>Rating</h5>
                <div className='rate'>
                    <ReactStars
                        count={rating}
                        fullIcon={<i className="fa fa-star"></i>}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
        </div>
    );
};

export default Reviews;