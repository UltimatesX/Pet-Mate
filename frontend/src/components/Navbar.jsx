import React, { useState, useEffect } from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap"; 
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${isScrolled ? "navbar-transparent" : "navbar-custom"}`}>
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">
          <img src="/logo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link text-black" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-black" to="/cat">Cats</Link></li>
            <li className="nav-item"><Link className="nav-link text-black" to="/dog">Dogs</Link></li>
            <li className="nav-item"><Link className="nav-link text-black" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
