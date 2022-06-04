import React from 'react';



const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img  src="https://i.ibb.co/VvKv2GM/mechanic-servicing-car.jpg" class="w-full h-96" /> 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/LgXJnfH/car-mechanic-wearing-white-uniform-stand-holding-wrench.jpg" class="w-full h-96" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/TbgGwb3/mechanic-repairing-engine-part-with-ratchet-repair-garage.jpg" class="w-full h-96" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;