import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import config from "../config";
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

const navLink = "relative text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300 " +
  "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 " +
  "after:transition-all after:duration-300 hover:after:w-full";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/tours`);
        setDestinations(res.data);
      } catch (err) {
        console.error("Error fetching destinations", err);
      }
    };
    fetchDestinations();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white text-sm px-2 md:px-6  lg:py-2 md:py-2 sm:py-0 flex justify-between items-center z-50">
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
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-transform duration-200 hover:scale-125 inline-block">
            <FacebookIcon fontSize="small" />
          </a>
          <a href="https://X.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-transform duration-200 hover:scale-125 inline-block">
            <XIcon fontSize="small" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-transform duration-200 hover:scale-125 inline-block">
            <InstagramIcon fontSize="small" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-transform duration-200 hover:scale-125 inline-block">
            <WhatsAppIcon fontSize="small" />
          </a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav
        className={`fixed w-full bg-white/95 backdrop-blur-sm lg:px-20 md:px-12 sm:px-6 flex justify-between items-center z-40 transition-all duration-300 ${
          scrolled ? "py-2 shadow-lg" : "py-4 shadow-md"
        }`}
      >
        {/* Logo */}
        <div>
          <Link to="/" className="inline-block transition-transform duration-300 hover:scale-105">
            <img src={Logo} alt="Logo" className="pt-[12px] w-28 h-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 ">
          <Link to="/" className={navLink}>
            Home
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300">
              Destination
              <span className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}>
                <ArrowDropDownIcon />
              </span>
            </button>
            <div
              className={`absolute mt-2 w-40 bg-white border border-gray-100 shadow-premium rounded-lg z-[1000] overflow-hidden origin-top transition-all duration-200 ${
                dropdownOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {destinations.map((dest, i) => (
                <Link
                  key={dest._id}
                  to={`/destinations/${dest.title}`}
                  className={`block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:pl-5 transition-all duration-200 ${
                    dropdownOpen ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: dropdownOpen ? `${i * 60}ms` : "0ms" }}
                  onClick={() => setDropdownOpen(false)}
                >
                  {dest.title}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/blogPage" className={navLink}>
            Blog
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="transition-transform duration-200 active:scale-90">
            {mobileOpen ? <CloseIcon fontSize="large" className="text-gray-800" /> : <MenuIcon fontSize="large" className="text-gray-800" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-[999] shadow-premium origin-top transition-all duration-300 ${
            mobileOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
          }`}
        >
          <Link to="/" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-gray-800 font-semibold hover:text-blue-600 transition-colors">
            Destination
            {dropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </button>
          {dropdownOpen && (
            <div className="flex flex-col pl-4 space-y-2">
              {destinations.map((dest, i) => (
                <Link
                  key={dest._id}
                  to={`/destinations/${dest.title}`}
                  className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 animate-fade-in-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                  onClick={() => {
                    setMobileOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  {dest.title}
                </Link>
              ))}
            </div>
          )}

          <Link to="/blogPage" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
