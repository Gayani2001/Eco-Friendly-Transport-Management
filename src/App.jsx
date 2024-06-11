import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bikes from "./components/Bikes";
import About from "./components/About";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="bikes">
          <Bikes />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="booking">
          <Booking />
        </div>

        <div id="review">
          <Reviews />
        </div>

      </main>

      <Footer />

    </div>
  );
};

export default App;