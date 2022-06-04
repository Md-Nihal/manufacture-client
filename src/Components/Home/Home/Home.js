import React from 'react';
import Service from '../../Service/Service';
import Footer from '../../Shared/Footer/Footer';

import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import MakeAppountment from '../MakeAppointment/MakeAppountment';
import ContactUs from '../ContactUs/ContactUs';

import Reviews from '../TestiMonials/Reviews';
import GetReview from '../TestiMonials/GetReview';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <DentalCare></DentalCare>
            <MakeAppountment></MakeAppountment>
            <GetReview></GetReview>
            
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>

    );
};

export default Home;