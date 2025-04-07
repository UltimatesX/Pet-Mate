import React from "react";
import { Link } from "react-router-dom";
 

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section position-relative">
        <div className="overlay-box text-center p-4">
          <h2 className="fw-bold">Find Your Perfect Pet Companion</h2>
          <p className="text-primary">
            “Whether you're a cat lover or dog lover, we've got the best match for you.”
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <button className="btn colo btn-warning fw-bold">
              <Link className="footlink text-black" to="/dog">Explore Dogs →</Link>
            </button>
            <button className="btn colo btn-warning fw-bold">
              <Link className="footlink text-black" to="/cat">Explore Cats →</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container   carddiv">
        <h2 className="text-center mb-4">Pets Category Highlight</h2>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {/* Dog Card */}
          <div className="pet-card card shadow-sm">
            <img src="/dog.jpg" className="card-img-top" alt="puppy" />
            <div className="card-body bg-warning">
              <p className="fw-semibold">
                Discover a wide range of dog breeds and services — from playful puppies to loyal companions, grooming to training — everything your furry friend needs is just a click away!
              </p>
              <button className="btn btn-light">
                <Link className="footlink text-black" to="/dog">Explore Now →</Link>
              </button>
            </div>
          </div>

        
          <div className="pet-card card shadow-sm">
            <img src="/cat.jpg" className="card-img-top" alt="kitten" />
            <div className="card-body bg-warning">
              <p className="fw-semibold">
                Explore our extensive collection of cat breeds and services — from cuddly kittens to majestic felines, health care to pampering sessions — all tailored for your purr-fect companion!
              </p>
              <button className="btn btn-light">
                <Link className="footlink text-black" to="/cat">Explore Now →</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
