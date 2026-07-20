import React from "react";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded transition ${isActive ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`;

const AdminNav = () => {
  return (
    <div className="max-w-xl mx-auto flex flex-wrap gap-2 mb-2">
      <NavLink to="/tours" className={linkClass}>
        Tours
      </NavLink>
      <NavLink to="/packages" className={linkClass}>
        Packages
      </NavLink>
      <NavLink to="/blogs" className={linkClass}>
        Blog
      </NavLink>
      <NavLink to="/about-admin" className={linkClass}>
        About
      </NavLink>
      <NavLink to="/reviews" className={linkClass}>
        Reviews
      </NavLink>
    </div>
  );
};

export default AdminNav;
