import React from 'react';
import acm_logo from "../assets/acm_logo.png";
import hacktoberlogo from "../assets/hacktoberlogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <img src={acm_logo} alt="ACM Logo" className="h-20" />
        <span className="ml-2 text-lg font-semibold">ACM-JEC Hacktoberfest</span>
      </div>
      <img src={hacktoberlogo} alt="Hacktober Logo" className="h-10" />
    </div>
  );
}

export default Navbar;
