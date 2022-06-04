import React from 'react';

import mechanic from '../../../assets/images/mechanic.png'
import bg from '../../../assets/images/background.jpg'


const MakeAppountment = () => {
    return (
        <section style={{ 
            background: `url(${bg})`
        }} className='flex justify-center  items-center text-white  mt-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-140px] ml-14' src={mechanic} alt='' />
            </div>
            <div className='flex-1 m-10'>
                <h1 className='text-3xl text-secondary
             font-bold mb-2'>Details</h1>
                <p>
                    We have professional car service partners with verified resources. We are making a one-stop auto service solution because your flexibility is our main priority.
                </p>
                <h2 className='text-3xl font-semibold mt-5 text-secondary'>
                    Preparations against COVID-19
                </h2>
                <ul class=" list-disc list-inside ">
                    <li className='font-semibold my-3'>Checked Health condition of service specialist</li>
                    <li className='font-semibold my-2'>Ensuring use of masks, hand sanitisers, gloves, etc</li>
                    <li className='font-semibold my-2'>Disinfecting equipments before and after the work</li>
                    <li className='font-semibold my-2'>Maintaining social distancing</li>
                </ul>

            </div>

        </section>
    );
};

export default MakeAppountment;