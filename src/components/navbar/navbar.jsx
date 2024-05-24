import React from "react";
import logo from "../img/nike_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="Nike Logo" className="w-10 h-10" />
          <span className="ml-3 font-bold text-2xl md:text-3xl">Nike</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 font-bold text-black hover:text-red-700" to="/">Menu</Link>
          <Link className="mr-5 font-bold text-black hover:text-red-700" to="/location">Location</Link>
          <Link className="mr-5 font-bold text-black hover:text-red-700" to="/about">About</Link>
          <Link className="mr-5 font-bold text-black hover:text-red-700" to="/contact">Contact</Link>
        </nav>
        <Link to='/login'>
        <button  className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0">Login</button>
           </Link>
       
      </div>
    </header>
  );
};

export default Navbar;
