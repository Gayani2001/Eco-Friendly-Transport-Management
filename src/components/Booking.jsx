import React from "react";
import BookingCard from "../layouts/BookingCard";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";


export const Booking = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-green-300">
            <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">Our Booking</h1>

            <div className=" flex flex-col lg:flex-row gap-12 justify-center">
                <BookingCard img={img1} title="City Bus" />
                <BookingCard img={img2} title="Ferries" />
                <BookingCard img={img3} title="Train" />

            </div>
        </div>
    );
};
export default Booking;