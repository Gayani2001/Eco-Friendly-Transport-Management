import React from "react";

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-black rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-4">EcoMove</h1>
                    <p className="text-sm">Welcome to our eco-friendly haven! Explore our sustainable bikes, enjoy green rides, and find the perfect cycle to enhance your daily journey..</p>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-green-800 transition-all cursor-pointer" href="/">Bikes</a>
                        <a className="hover:text-green-800 transition-all cursor-pointer" href="/">About Us</a>
                        <a className="hover:text-green-800 transition-all cursor-pointer" href="/">Products</a>
                        <a className="hover:text-green-800 transition-all cursor-pointer" href="/">Reviews</a>
                    </nav>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Bikes</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-green-800 transition-all cursor-pointer" href="/">City Bus</a>
                        <a className="hover:text-green-800 transition-all cursor-pointer" href="/">Ferries</a>
                        <a className="hover:text-green-800 transition-all cursor-pointer" href="/">Train</a>
                    </nav>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-green-800 transition-all cursor-pointer" href="/">ecomove@gmail.com</a>
                        <a className="hover:text-green-800 transition-all cursor-pointer" href="/">0112 111 234</a>
                        <a className="hover:text-green-800 transition-all cursor-pointer" href="/">Social media</a>
                    </nav>
                </div>
            </div>
            <div>
                <p className="text-center py-4">
                    @copyright developed by
                    <span className="font-semibold text-white-800"> Champion programmers </span>
                    All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
