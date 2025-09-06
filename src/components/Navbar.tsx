import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-0">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-orange-600 tracking-wide"
        >
          ArciSol
        </Link>
        {/* Navigation */}
        <ul className="hidden md:flex space-x-10 font-semibold text-gray-700 uppercase">
          <li>
            <Link
              to="/about"
              className="relative hover:text-orange-600 transition"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/#contact-us"
              className="relative hover:text-orange-600 transition"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/#core-values"
              className="relative hover:text-orange-600 transition"
            >
              Core Values
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/demo"
              className="relative hover:text-orange-600 transition"
            >
              Demo
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/#features"
              className="relative hover:text-orange-600 transition"
            >
              ERP Modules
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/#industries"
              className="relative hover:text-orange-600 transition"
            >
              Industries
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="relative hover:text-orange-600 transition"
            >
              Pricing
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/#why-choose"
              className="relative hover:text-orange-600 transition"
            >
              Why Choose
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-blue-400 text-white text-lg text-right py-3 px-6 rounded-md">
        <a
          href="/tenant-request"
          className="bg-orange-400 text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-black transition transform"
        >
          Start for free
        </a>
      </div>
    </header>
  );
};

export default Navbar;
