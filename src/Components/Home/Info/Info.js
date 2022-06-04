import React from 'react';

const Info = () => {
    
    return (
        <section className='text-center my-24'>
            <h1 className='text-4xl font-bold my-5'>
                How to order
            </h1>
            <ul class="steps steps-vertical lg:steps-horizontal text-xl">
                <li data-content="?" class="step step-accent">Register</li>
                <li data-content="!" class="step step-accent">Appointment</li>
                <li data-content="★" class="step step-accent mr-2">Select Your quality</li>
                
                <li data-content="✓" class="step">Payment</li>
            </ul>

        </section>
        
    );
};

export default Info;