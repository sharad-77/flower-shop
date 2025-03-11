import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#454545] h-auto flex flex-col items-center text-white py-6 px-4 md:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto flex flex-wrap items-center justify-between space-y-6 text-center md:flex-nowrap md:space-y-0 md:px-10">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <p className="text-orange-500 text-2xl font-bold">FLOWER SHOP</p>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Flower Shop</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 w-full md:w-1/3">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/shop" className="hover:text-gray-300">Shop</Link>
          <Link to="/FeedBack" className="hover:text-gray-300">FeedBack</Link>
          <Link to="/signin" className="hover:text-gray-300">Sign In</Link>
        </div>

        {/* Contact Us Section */}
        <div className="text-sm flex flex-col text-center w-full md:w-1/3">
          <p className="text-xl py-3">Contact Us</p>
          <div className="space-y-2">
            <p className="flex items-center justify-center gap-2">
              <IoLocationSharp /> Nobel, Gujarat, India
            </p>
            <p>@ Support@gmail.com</p>
            <p className="flex items-center justify-center gap-2">
              <IoCall /> 1234-000000
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

