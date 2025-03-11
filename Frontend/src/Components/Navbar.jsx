import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="p-2 shadow-md">
      <div className="md:flex mx-auto max-w-6xl">
        <div className="flex justify-between items-center w-full p-2">
          <Link to="/" className="text-orange-500 md:text-2xl font-bold">
            FLOWER SHOP
          </Link>
          <button
            type="button"
            className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none ml-[12rem]"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block w-full md:flex md:justify-end md:items-center border-t md:border-t-0 border-gray-200 `}
        >
          <ul className="flex flex-col md:flex-row md:items-center py-2 md:py-0">
            <li className="py-2 md:py-0 md:ml-4">
              <Link
                to="/"
                className={activeLink === "HOME" ? "block text-orange-500 font-medium transition duration-200 text-center" : "block text-gray-700 font-medium hover:text-orange-500 transition duration-200 text-center"}
                onClick={() => handleLinkClick("HOME")}
              >
                HOME
              </Link>
            </li>
            <li className="py-2 md:py-0 md:ml-4">
              <Link
                to="/shop"
                className={activeLink === "SHOP" ? "block text-orange-500 font-medium transition duration-200 text-center" : "block text-gray-700 font-medium hover:text-orange-500 transition duration-200 text-center"}
                onClick={() => handleLinkClick("SHOP")}
              >
                SHOP
              </Link>
            </li>
            <li className="py-2 md:py-0 md:ml-4">
              <Link
                to="/FeedBack"
                className={activeLink === "FEEDBACK" ? "block text-orange-500 font-medium transition duration-200 text-center" : "block text-gray-700 font-medium hover:text-orange-500 transition duration-200 text-center"}
                onClick={() => handleLinkClick("FEEDBACK")}
              >
                FEEDBACK
              </Link>
            </li>
            <li className="py-2 md:py-0 md:ml-6">
              <Link
                to="/signin"
                className="block text-orange-500 transition duration-200 text-center"
              >
                <CgProfile className="h-6 w-6 inline-block" />
              </Link>
            </li>
            <li className="py-2 md:py-0 md:ml-4">
              <Link
                to="/cart"
                className="block text-orange-500 transition duration-200 text-center"
              >
                <FaShoppingCart className="h-6 w-6 inline-block" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;