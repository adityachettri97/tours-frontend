// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const footerLink = "text-gray-400 hover:text-white transition-all duration-300 hover:pl-1 inline-block";

const Footer = () => {
  const scrollToTop = () => {
    document.getElementById("root")?.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-14 pb-6 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-3">TravelPeak</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Curated tours and unforgettable journeys — helping you explore the world with comfort, safety, and joy.
          </p>
          <div className="flex space-x-3 mt-4">
            {[
              { icon: FacebookIcon, href: "https://facebook.com", hover: "hover:bg-blue-600" },
              { icon: XIcon, href: "https://X.com", hover: "hover:bg-black" },
              { icon: InstagramIcon, href: "https://instagram.com", hover: "hover:bg-pink-600" },
              { icon: WhatsAppIcon, href: "https://whatsapp.com", hover: "hover:bg-[#25D366]" },
            ].map(({ icon: Icon, href, hover }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 ${hover}`}
              >
                <Icon fontSize="small" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className={footerLink}>Home</Link></li>
            <li><Link to="/about" className={footerLink}>About Us</Link></li>
            <li><Link to="/blogPage" className={footerLink}>Blog</Link></li>
            <li><Link to="/book-now" className={footerLink}>Book Now</Link></li>
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-white font-semibold mb-3">Destinations</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/destinations/Darjeeling" className={footerLink}>Darjeeling</Link></li>
            <li><Link to="/destinations/Kalimpong" className={footerLink}>Kalimpong</Link></li>
            <li><Link to="/destinations/Sikkim" className={footerLink}>Sikkim</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
              <PhoneIcon fontSize="small" /> +91 9876543210
            </li>
            <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
              <EmailIcon fontSize="small" /> info@travelpeak.com
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} TravelPeak. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
        >
          <KeyboardArrowUpIcon />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
