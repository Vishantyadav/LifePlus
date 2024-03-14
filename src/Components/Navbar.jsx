import React from "react";
import logo from "../assets/logo.jpeg";
import login from "../assets/login.jpeg";
import shivam from "../assets/shivam.jpeg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8">
      <div className="flex items-center">
        <img className="h-10 w-10 mr-4" src={logo} alt="logo" />
        <h1 className="font-sans hover:font-serif font-bold text-2xl text-blue-600">LIFEPLUS</h1>
      </div>
      <div className="flex space-x-8">
        <h2 className="font-bold text-lg text-gray-600 hover:text-blue-600 cursor-pointer">Home</h2>
        <h2 className="font-bold text-lg text-gray-600 hover:text-blue-600 cursor-pointer">Doctor's</h2>
        <h2 className="font-bold text-lg text-gray-600 hover:text-blue-600 cursor-pointer">Advice</h2>
        <div>
          <img className="adjustable-image" src={login} alt="login" style={{height: "2.5rem", width: "2.5rem", marginRight: "0.5rem", filter: "brightness(100%) contrast(100%) saturate(100%)"}} />
        </div>
        <div>
          <img className="adjustable-image" src={shivam} alt="shivam" style={{height: "2.5rem", width: "2.5rem", marginRight: "0.5rem", filter: "brightness(100%) contrast(100%) saturate(100%)"}} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
