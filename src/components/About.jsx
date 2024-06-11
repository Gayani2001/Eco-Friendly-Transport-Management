import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-green-300">
            <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

            <div className=" flex flex-col lg:flex-row items-center gap-5">
                <div className=" w-full lg:w-2/4">
                    <img className="rounded-lg" src={img} alt="img" />
                </div>
                <div className=" w-full lg:w-2/4 p-4 space-y-3">
                    <h2 className=" font-semibold text-3xl">Why Choose Our Eco-Friendly Bikes</h2>
                    <p>
                        Explore the freedom of eco-friendly travel with our electric bicycles and foot cycle rentals.
                        Our bikes combine innovation and sustainability, offering you a seamless and enjoyable ride.
                        Whether you're commuting or exploring, our green solutions help reduce your carbon footprint
                        while providing unmatched comfort and efficiency. Join us in making a positive impact
                        on the planet, one ride at a time.
                    </p>
                    <p>
                        Explore our innovative electric bicycles and foot cycle rentals,
                        designed for sustainability and efficiency. Embrace a greener lifestyle
                        with every ride and make a positive impact on the environment.
                    </p>

                    <Button title="Read More" />
                </div>
            </div>
        </div>
    );

};

export default About;