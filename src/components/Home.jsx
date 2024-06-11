import React from 'react'
import Button from '../layouts/Button'
import img from '../assets/img/home.jpg'

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-green-100 to-green-600">
            <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
                <h1 className="font-semibold text-4xl lg:text-3xl text-center lg:text-start leading-tight">
                    Ride the future today with our eco-friendly electric bicycles and convenient foot cycle rentals.<br />
                    <span className="text-3xl lg:text-4xl">Explore more, worry less!</span>
                </h1>

                <p>Enhance your productivity and elevate your spirits with an eco-friendly electric bike or foot cycle rental for your daily commute</p>
                <div className="flex flex-row gap-6">
                    <Button title="ADD TO CART" />
                    <Button title="MORE BOOKING" />
                </div>
            </div>


            <div className="relative">
                <img src={img} alt="img" style={{ borderRadius: '50%' }} />

                <div className="absolute bg-green-600 px-8 py-2 bottom-16 left-0 rounded-full">
                    <h2>EcoFriendly</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;