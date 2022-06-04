import React from 'react';
import portfolio from '../../assets/images/portfolio.jpg'

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={portfolio} alt='' class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-3xl font-bold">Shahriar Islam</h1>
            <p class="py-6">Email: dipshahriarislam@gmail.com</p>
            <p class="py-6">Phone : 01871535267</p>
            
          </div>
        </div>
      </div>
    );
};

export default MyPortfolio;