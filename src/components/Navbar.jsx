import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white text-sm px-4 md:px-6  lg:py-2 md:py-2 sm:py-0 flex justify-between items-center z-50">
        <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-6 items-start sm:items-center">
          <span className="flex items-center space-x-1">
            <PhoneIcon fontSize="small" />
            <span>+91 9876543210</span>
          </span>
          <span className="flex items-center space-x-1">
            <EmailIcon fontSize="small" />
            <span>info@travelpeak.com</span>
          </span>
        </div>

        <div className="flex space-x-3 md:space-x-4 mt-1 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FacebookIcon fontSize="small" />
          </a>
          <a href="https://X.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <XIcon fontSize="small" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
            <InstagramIcon fontSize="small" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-[#25D366]">
            <WhatsAppIcon fontSize="small" />
          </a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav
        className={`fixed  w-full bg-white shadow-md   lg:px-20 md:px-12 sm:px-6 py-4  flex justify-between items-center z-40 transition-all duration-300 
       `}
      >
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="pt-[12px] w-28 h-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 ">
          <Link to="/" className="text-gray-800 font-semibold hover:text-blue-600">
            Home
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-gray-800 font-semibold hover:text-blue-600">
              Destination
              {dropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded z-[1000]">
                <Link to="/destinations/Darjeeling" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Darjeeling
                </Link>
                <Link to="/destinations/Kalimpong" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Kalimpong
                </Link>
                <Link to="/destinations/Sikkim" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Sikkim
                </Link>
              </div>
            )}
          </div>

          <Link to="/blogPage" className="text-gray-800 font-semibold hover:text-blue-600">
            Blog
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <CloseIcon fontSize="large" className="text-gray-800" /> : <MenuIcon fontSize="large" className="text-gray-800" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-28 left-0 w-full bg-white flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-[999]">
            <Link to="/" className="text-gray-800 font-semibold hover:text-blue-600" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-gray-800 font-semibold hover:text-blue-600">
              Destination
              {dropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </button>
            {dropdownOpen && (
              <div className="flex flex-col pl-4 space-y-2">
                <Link to="/destinations/Darjeeling" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>
                  Darjeeling
                </Link>
                <Link to="/destinations/Kalimpong" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>
                  Kalimpong
                </Link>
                <Link to="/destinations/Sikkim" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>
                  Sikkim
                </Link>
              </div>
            )}

            <Link to="/blogPage" className="text-gray-800 font-semibold hover:text-blue-600" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
