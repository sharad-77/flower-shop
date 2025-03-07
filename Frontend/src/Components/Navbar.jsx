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
    <nav className="p-2 shadow-md ">
      <div className="flex justify-between mx-auto max-w-7xl ">
        <div className="flex justify-between items-center ">
          <Link to="/" className="text-orange-500 text-2xl font-bold">
            FLOWER SHOP
          </Link>
          <button
            type="button"
            className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none"
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
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex mt-4 md:mt-0 `}
        >
          <ul className="md:flex md:justify-start lg:justify-end md:items-center">
            <div className="flex">
              <li className="py-1 md:py-0 md:ml-4">
                <Link
                  to="/"
                  className={`block text-${
                    activeLink === "HOME" ? "orange-500" : "gray-700"
                  } font-medium hover:text-orange-500 transition duration-200 text-center`}
                  onClick={() => handleLinkClick("HOME")}
                >
                  HOME
                </Link>
              </li>
              <li className="py-1 md:py-0 md:ml-4">
                <Link
                  to="/shop"
                  className={`block text-${
                    activeLink === "SHOP" ? "orange-500" : "gray-700"
                  } font-medium hover:text-orange-500 transition duration-200 text-center`}
                  onClick={() => handleLinkClick("SHOP")}
                >
                  SHOP
                </Link>
              </li>
              <li className="py-1 md:py-0 md:ml-4">
                <Link
                  to="/review"
                  className={`block text-${
                    activeLink === "REVIEW" ? "orange-500" : "gray-700"
                  } font-medium hover:text-orange-500 transition duration-200 text-center`}
                  onClick={() => handleLinkClick("REVIEW")}
                >
                  REVIEW
                </Link>
              </li>
            </div>

            <div className="flex">
              <li className="py-1 md:py-0 md:ml-4">
                <Link
                  to="/signin"
                  className="block text-orange-500 transition duration-200 text-center"
                >
                  <CgProfile className="h-6 w-6 inline-block" />
                </Link>
              </li>
              <li className="py-1 md:py-0 md:ml-4">
                <Link
                  to="/cart"
                  className="block text-orange-500 transition duration-200 text-center"
                >
                  <FaShoppingCart className="h-6 w-6 inline-block" />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
