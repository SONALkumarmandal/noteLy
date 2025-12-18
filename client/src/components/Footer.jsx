import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold text-white">noteLY</h2>
          <p className="mt-2 text-sm text-gray-400">
            Building modern web experiences with Tailwind CSS.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Links
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Follow Us
          </h3>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.instagram.com/sonaal_mandal_0027?igsh=MTJqazdlaDlhZ3p3NA==" className="hover:text-white">
              Instagram
            </a>
            <a href="https://github.com/SONALkumarmandal" className="hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sonal-kumar-mandal-8402a5262" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} noteLY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
