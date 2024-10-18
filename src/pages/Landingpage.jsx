import React from 'react';
import { Link } from 'react-router-dom';
import Homelogo from '../assets/Homelogo.png';

const Landingpage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center p-4 mt-[-10]"> {/* Adjusted margin-top here */}
      <h1 className="font-bold text-3xl md:text-4xl mb-2">
        Together, let's push the boundaries 
      </h1>
      <h1 className="font-bold text-3xl md:text-4xl mb-5">
        of what's possible in open source!
      </h1>
      <Link to="/repo">
        <button className="bg-black text-white py-2 px-6 text-lg mb-5 hover:bg-gray-700 transition-colors rounded-lg">
          GET STARTED NOW..
        </button>
      </Link>
      <img src={Homelogo} alt="Home Logo" className="max-w-full h-auto max-h-[300px] md:max-h-[400px]" />
    </div>
  );
}

export default Landingpage;
