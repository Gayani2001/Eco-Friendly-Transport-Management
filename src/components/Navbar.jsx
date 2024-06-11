import React, { useState } from "react";
import { FaMotorcycle } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
    const [bikes, setBikes] = useState(false);

    const handleChange = () => {
        setBikes(!bikes);
    };

    const closeBikes = () => {
        setBikes(false);
    };

    return (
        <div className="fixed w-full z-10">
            <div>
                <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-green-600 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="flex flex-row items-center cursor-pointer gap-2">
                        <span>
                            <FaMotorcycle size={35} />
                        </span>
                        <h1 className="text-4xl font-semibold text-black">EcoMove</h1>
                    </div>

                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block cursor-pointer hover:text-white"
                        >Home
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>

                        <Link
                            to="bikes"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block cursor-pointer hover:text-white"
                        >Bikes
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>

                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block cursor-pointer hover:text-white"
                        >About Us
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>

                        <Link
                            to="booking"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block cursor-pointer hover:text-white"
                        >Booking
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>

                        <Link
                            to="review"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block cursor-pointer hover:text-white"
                        >Reviews
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                    </nav>

                    <div className="hidden lg:flex">
                        <Button title="Login" />
                    </div>

                    <div className="md:hidden flex items-center">
                        {bikes ? (
                            <AiOutlineClose size={25} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                        )}
                    </div>
                </div>
                <div className={`${bikes ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-green-400 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative inline-block cursor-pointer hover:text-white"
                        onClick={closeBikes}
                    >Home
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>

                    <Link
                        to="bikes"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative inline-block cursor-pointer hover:text-white"
                        onClick={closeBikes}
                    >Bikes
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>

                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative inline-block cursor-pointer hover:text-white"
                        onClick={closeBikes}
                    >About Us
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>

                    <Link
                        to="booking"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative inline-block cursor-pointer hover:text-white"
                        onClick={closeBikes}
                    >Booking
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>

                    <Link
                        to="review"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative inline-block cursor-pointer hover:text-white"
                        onClick={closeBikes}
                    >Reviews
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>

                    <Button title="Login" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
