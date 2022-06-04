import React from 'react';
import carService from '../../../assets/images/carservice.jpg'
import GetStarted from '../../GetStarted/GetStarted';
const DentalCare = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={carService} class="max-w-sm rounded-lg shadow-2xl" alt='' />
          <div className='ml-8'>
            <h1 class="text-3xl font-bold">TATA Motor's Car  Service,<br></br> Pricing & Terms</h1>
            <div class="py-8">
              <div className='my-2'>
              <h4 className='text-xl font-bold'>
                Service Charge:
              </h4>
              <span className='text-xs'>The mentioned pricing is estimated service charges which might vary slightly depending on: Vehicle Type, Model, and Service Availability.
              </span>
              </div>
              <div className='mt-2'>
              <h4 className='text-xl font-bold'>
              Warranty: 
              </h4>
              <span className='text-xs'>* Warranty on consumables and parts will be as per manufacturer   </span>
              </div>  
              <div className='mt-2'>
              <h4 className='text-xl font-bold'>
              Service Policy:
              </h4>
              <span className='text-xs'>The roadside auto service charge of maximum BDT 300 is applicable if the customer decides not to take the service after the service provider visited the location. However, if the customer agrees to avail this service on scheduled time then the roadside assistance service charge is not applicable.
              </span>
              </div>
              <div className='my-2'>
              <h4 className='text-xl font-bold'>
              Payment:
              </h4>
              <span className='text-xs'>You can pay through online or COD. After payment please make sure, you have received the SMS containing the money receipt.
              </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;