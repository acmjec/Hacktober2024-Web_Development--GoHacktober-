import React from 'react';
import Andriod from "../assets/Andriod.png";
import Cp from "../assets/Cp.png";
import Ml from "../assets/Ml.png";
import Homelogo from "../assets/Homelogo.png";
import WebDev from "../assets/WebDev.png";

const Repopage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl font-bold mb-10 uppercase">REPOSITORIES</h1> 
      <div className="flex space-x-4">
        <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md w-40 h-32"> 
          <img src={Andriod} alt="Android" className="h-12 mb-2" />
          <span className="text-lg font-semibold">Android</span>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md w-40 h-32">
          <img src={WebDev} alt="Web Development" className="h-12 mb-2" />
          <span className="text-lg font-semibold">Web Dev</span>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md w-40 h-32">
          <img src={Ml} alt="Machine Learning" className="h-12 mb-2" />
          <span className="text-lg font-semibold">ML</span>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md w-40 h-32">
          <img src={Cp} alt="Competitive Programming" className="h-12 mb-2" />
          <span className="text-lg font-semibold">CP</span>
        </div>
      </div>
      <img src={Homelogo} alt="Homepage Logo" className="mt-10 max-w-full h-auto max-h-[400px]" />
    </div>
  );
}

export default Repopage;
