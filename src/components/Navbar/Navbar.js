import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <header className="navbar-dark header-sticky">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <a
            className="navbar-brand"
            href="#home">
            Condor Elite TownCar Service
          </a>
          {/* Responsive navbar toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div
            className="collapse navbar-collapse"
            id="navbarNav">
            <ul className="navbar-nav navbar-nav-scroll ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#vehicles">
                  Our Vehicles
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#why">
                  Why Choose Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#booking">
                  Book a Ride
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
