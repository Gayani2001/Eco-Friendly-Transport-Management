import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = (props) => {
    return (
        <div className=" flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
            <div className=" flex flex-row items-center lg:justify-start justify-center">
                <div className=" w-1/4">
                    <img className=" rounded-full" src={props.img} alt="img" />
                </div>
                <div className=" mx-3">
                    <h2 className="font-semibold text-lg">{props.title}</h2>
                    <div className="flex">
                        <BsStarFill className=" text-brightColor" />
                        <BsStarFill className=" text-brightColor" />
                        <BsStarFill className=" text-brightColor" />
                        <BsStarFill className=" text-brightColor" />
                        <BsStarHalf className=" text-brightColor" />

                    </div>
                </div>
                <span className=" ml-16">
                    <FaQuoteRight className=" text-backgroundColor" size={42} />
                </span>
            </div>
            <p>
                Renting bikes from EcoMove was a delight! Booking on their user-friendly 
                website was a breeze, and pickup was seamless. The bikes were in pristine condition, 
                reflecting EcoMove's eco-friendly ethos. Riding through scenic trails was a joy, knowing 
                we were reducing our carbon footprint. With a variety of bikes available, we cruised city 
                streets and tackled rugged terrain with ease. The EcoMove team provided excellent service, 
                making our experience memorable. Can't wait for our next adventure with EcoMove!
            </p>
        </div>
    );
};

export default ReviewCard;