import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
    
    return (
        <div style={{
            background: `url(${''})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               
                <div>
                    <DayPicker
                        mode="single"
                        
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;