import React from 'react';
import BikeCard from '../layouts/BikeCard'; // Make sure to import MenuCard and images
import img1 from '../assets/img/road_bike.jpg';
import img2 from '../assets/img/mountain_bike.jpg';
import img3 from '../assets/img/hybrid_bike.jpg';
import img4 from '../assets/img/electric_bike.jpg';
import img5 from '../assets/img/cruiser_bike.jpg';
import img6 from '../assets/img/folding_bike.jpg';

const Bikes = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-green-300">
            <h1 className="font-semibold text-center text-4xl mt-24 mb-8">Our Eco-Friendly Bicycles</h1>

            <div className="flex flex-wrap pb-8 gap-8 justify-center">
                <BikeCard img={img1} title="Eco Road Bike" />
                <BikeCard img={img2} title="Eco Mountain Bike" />
                <BikeCard img={img3} title="Eco Hybrid Bike" />
                <BikeCard img={img4} title="Eco Electric Bike" />
                <BikeCard img={img5} title="Eco Cruiser Bike" />
                <BikeCard img={img6} title="Eco Folding Bike" />
            </div>
        </div>
    );
};

export default Bikes;
