import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
 

const Dogs = () => {
  const [breeds, setBreeds] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const visibleCards = 3;

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breedNames = Object.keys(data.message).slice(0, 10); // top 10 breeds

    const breedData = await Promise.all(
      breedNames.map(async (breed) => {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const imgData = await res.json();
        return {
          name: breed.charAt(0).toUpperCase() + breed.slice(1),
          image: imgData.message,
        };
      })
    );
    setBreeds(breedData);
  };

  const handleNext = () => {
    setStartIndex((startIndex + 1) % breeds.length);
  };

  const handlePrev = () => {
    setStartIndex((startIndex - 1 + breeds.length) % breeds.length);
  };

  const getVisibleCards = () => {
    let cards = [];
    for (let i = 0; i < visibleCards; i++) {
      cards.push(breeds[(startIndex + i) % breeds.length]);
    }
    return cards;
  };

  const handleSearch = () => {
    if (
      !selectedBreed ||
      selectedBreed === "BREED" ||
      !selectedLocation ||
      selectedLocation === "LOCATION"
    ) {
      alert("Please select both breed and location.");
    } else {
      alert(
        `${selectedBreed} is not available in ${selectedLocation}. Site under maintenance, check back later.`
      );
    }
  };

  return (
    <div className="container my-5">
      {/* Breed & Location Select */}
      <div className="bg-white p-4 mb-5 rounded shadow text-center">
        <h5 className="fw-bold mb-3">SELECT THE PERFECT BREED FOR YOU</h5>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <select
            className="form-select w-auto"
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option>BREED</option>
            {breeds.map((b, i) => (
              <option key={i}>{b.name}</option>
            ))}
          </select>
          <select
            className="form-select w-auto"
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option>LOCATION</option>
            <option>Delhi</option>
            <option>Jaipur</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Kolkata</option>
          </select>
          <Button variant="primary" onClick={handleSearch}>
            Search Now
          </Button>
        </div>
      </div>

      {/* Cards Carousel */}
      <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
        <Button variant="light" className="circle-btn" onClick={handlePrev}>
          &larr;
        </Button>

        {breeds.length === 0 ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          getVisibleCards().map((dog, idx) => {
            const position =
              visibleCards === 2
                ? idx === 0
                  ? "left"
                  : "right"
                : idx === 1
                ? "center"
                : idx === 0
                ? "left"
                : "right";
            const isCenter = position === "center";

            return (
              <div
                key={idx}
                className={`dog-card dog-card-${position} ${
                  isCenter ? "active-card" : "inactive-card"
                }`}
                onClick={() =>
                  isCenter &&
                  window.open(
                    `https://www.google.com/search?q=${dog.name}+dog`,
                    "_blank"
                  )
                }
              >
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="img-fluid rounded mb-2"
                  style={{ height: "250px", width: "100%", objectFit: "cover" }}
                />
                <h5>{dog.name}</h5>
                <div className="d-flex justify-content-around py-2">
                  <Button variant="outline-danger" disabled={!isCenter}>
                    ✖
                  </Button>
                  <Button variant="outline-primary" disabled={!isCenter}>
                    ❤
                  </Button>
                  <Button variant="outline-warning" disabled={!isCenter}>
                    ★
                  </Button>
                </div>
                {isCenter && <div className="explore-overlay">Explore More</div>}
              </div>
            );
          })
        )}

        <Button variant="light" className="circle-btn" onClick={handleNext}>
          &rarr;
        </Button>
      </div>
    </div>
  );
};

export default Dogs;
