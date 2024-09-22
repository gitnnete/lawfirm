import React, { useState, useEffect } from "react"; // {{ edit_1 }}
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // {{ edit_2 }}
  const [isOpen, setIsOpen] = useState(false); // New state for dropdown

  const toggleDropdown = () => setIsOpen(!isOpen); // Toggle function

  useEffect(() => {
    setIsOpen(false); // Close dropdown on location change
  }, [location]);

  return (
    <>
    <div className="container">
    <nav className="navbar navbar-expand-lg bg-white px-3">
        {/* Logo on the left */}
        <span className="navbar-brand mb-0 h1 text-black"  data-aos="fade-right">Commodor <span className="redtext">Law</span></span>

        {/* Button for toggling the menu on small screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleDropdown} // Toggle dropdown on click
          aria-expanded={isOpen} // Update aria attribute
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content (links) */}
        <div className={`collapse navbar-collapse mb-3 ${isOpen ? 'show' : ''}`} id="navbarNav"> 
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link
                to="/"
                className={`nav-link text-black ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                to="/services"
                className={`nav-link text-black ${
                  location.pathname === "/services" ? "active" : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                to="/contact"
                className={`nav-link text-black ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
