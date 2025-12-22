import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-medium"
      : "text-gray-600 hover:text-gray-900 transition";

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-gray-800">
          NoteLY
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/home" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Auth Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-zinc-950 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Sign In
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
