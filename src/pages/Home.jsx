import React from "react";
import acm_logo from "../assets/acm_logo.png";
import hacktober_logo from "../assets/hacktober_logo.png";
import head_img from "../assets/head_img.png";

const Home = () => {
  return (
    <div className="head relative w-full h-screen flex flex-col overflow-y-hidden">

      {/* Header with logos */}
      <div className="relative z-10 w-full flex justify-between items-center px-4 py-4">
        <img src={acm_logo} alt="ACM Logo" className="h-10 md:h-20" />
        <img src={hacktober_logo} alt="Hacktober Logo" className="h-10 md:h-12" />
      </div>

      {/* Main content: Text and button */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center gap-5 px-4">
        <p className="text-center w-full sm:w-[80%] md:w-[60%] lg:w-[40%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Together, let's push the boundaries of what's possible in open source!
        </p>
        <button className="bg-black text-white px-5 sm:px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Get Started Now..
        </button>
      </div>

      {/* Bottom image */}
      <div className="relative z-10 w-full flex justify-center">
        <img
          className="object-contain max-w-[80%]"
          src={head_img}
          alt="Illustration"
        />
      </div>
    </div>
  );
};

export default Home;
