import React from "react";
import { Link } from "react-router-dom";
 

const Footer  = () => {
  return (
    <footer className="bg-primary text-white p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 footcon">
            <img src="/logo.png" alt="logo" />
            <p>The Right Match for Every Breed</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links →</h5>
            <ul className="list-unstyled">
            <li ><Link className="footlink " to="/">Home</Link></li>
            <li ><Link className="footlink " to="/cat">Cats</Link></li>
            <li ><Link className="footlink " to="/dog">Dogs</Link></li>
            <li ><Link className="footlink " to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Subscribe to our newsletter</h5>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control mb-2"
            />
          </div>
        </div>
      </div>
      <p className="text-center mt-3">&copy; 2025 PetMate. All rights reserved.</p>
    </footer>
  );
};

export default Footer ;
