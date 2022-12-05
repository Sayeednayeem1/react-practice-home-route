import React from 'react';
import Slider1 from '../../../assets/images/carousel1.jpg';
import Slider2 from '../../../assets/images/carousel2.jpg';
import Slider3 from '../../../assets/images/carousel3.jpg';
import Slider4 from '../../../assets/images/carousel4.jpg';

const Slider = () => {
    return (
        <div className='mt-10 mb-10'>
            <h2 className='text-green-600 text-2xl text-center mb-8'>This Is Slider Number 1</h2>
            <div className="carousel w-3/4 mx-auto h-96">
                <div id="item1" className="carousel-item w-full">
                    <img alt='' src={Slider1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='' src={Slider2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='' src={Slider3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='' src={Slider4} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;