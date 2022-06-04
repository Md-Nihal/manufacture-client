import React from 'react';
import background from '../../../assets/images/hellobg.jpg'

const ContactUs = () => {
    return (
        <div style={{
            background:`url(${background})`}}  class="hero min-h-screen">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello There</h1>
      <p class="mb-5">We are Started From Here.Now You can see where we are.Thats only possible because of the hardwork of your employee.Hope you can trust us.So go to the Appointment section and book your Appointment as soon as possible</p>
      
    </div>
  </div>
</div>
    );
};

export default ContactUs;