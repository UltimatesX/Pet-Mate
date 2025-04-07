import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [lockedCat, setLockedCat] = useState(localStorage.getItem("lockedCat") || null);

  const visibleCards = 3;

  const allCats = [
    {
      id: "Cat-1",
      breed: "Persian",
      location: "Delhi",
      image: "/cats/persian.jpg"
    },
    {
      id: "Cat-2",
      breed: "Siamese",
      location: "Jaipur",
      image: "/cats/siamese.webp"
    },
    {
      id: "Cat-3",
      breed: "Maine Coon",
      location: "Mumbai",
      image: "/cats/coon.jpg"
    },
    {
      id: "Cat-4",
      breed: "Bengal",
      location: "Kolkata",
      image: "/cats/bengal.webp"
    },
    {
      id: "Cat-5",
      breed: "Ragdoll",
      location: "Bangalore",
      image: "/cats/ragdoll.webp"
    },
    {
      id: "Cat-6",
      breed: "British Shorthair",
      location: "Delhi",
      image: "/cats/british.webp"
    },
    {
      id: "Cat-7",
      breed: "Sphynx",
      location: "Jaipur",
      image: "/cats/sphynx.webp"
    }
  ];

  const getVisibleCards = () => {
    const end = startIndex + visibleCards;
    return cats.slice(startIndex, end);
  };

  const handlePrev = () => {
    setStartIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return Math.max(cats.length - visibleCards, 0); // loop to last page
      }
      return newIndex;
    });
  };
  
  const handleNext = () => {
    setStartIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex > cats.length - visibleCards) {
        return 0; // loop back to first page
      }
      return newIndex;
    });
  };
  

  const handleSearch = () => {
    const filtered = allCats.filter((cat) => {
      const breedMatch = selectedBreed
        ? cat.breed.toLowerCase() === selectedBreed.toLowerCase()
        : true;
  
      const locationMatch = selectedLocation
        ? cat.location.toLowerCase() === selectedLocation.toLowerCase()
        : true;
  
      return breedMatch && locationMatch;
    });
  
    if (filtered.length === 0) {
      alert("This cat is not found at this location. Site under maintenance, check back later.");
    } else {
      setCats(filtered);
      setStartIndex(0);
    }
  };

  const toggleLock = (catId) => {
    if (lockedCat === catId) {
      setLockedCat(null);
      localStorage.removeItem("lockedCat");
    } else {
      setLockedCat(catId);
      localStorage.setItem("lockedCat", catId);
    }
  };

  useEffect(() => {
    setCats(allCats); // Load all cats on first load
  }, []);

  const breedOptions = [...new Set(allCats.map((cat) => cat.breed))];
  const locationOptions = [...new Set(allCats.map((cat) => cat.location))];

  return (
    <div className="container my-5">
      {/* Filter Section */}
      <div className="bg-white p-4 mb-5 rounded shadow text-center">
        <h5 className="fw-bold mb-3">SELECT THE PURR-FECT CAT FOR YOU</h5>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <select className="form-select w-auto" value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
            <option value="">BREED</option>
            {breedOptions.map((breed) => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>

          <select className="form-select w-auto" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
            <option value="">LOCATION</option>
            {locationOptions.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          <Button variant="primary" onClick={handleSearch}>Search Now</Button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
        <Button variant="light" className="circle-btn" onClick={handlePrev}>&larr;</Button>

        {cats.length === 0 ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          getVisibleCards().map((cat, idx) => {
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
            const isLocked = lockedCat === cat.id;

            return (
              <div
                key={idx}
                className={`dog-card dog-card-${position} ${isCenter ? "active-card" : "inactive-card"}`}
                onClick={() =>
                  isCenter &&
                  window.open(`https://www.google.com/search?q=${cat.breed}+cat`, "_blank")
                }
              >
                <img
                  src={cat.image}
                  alt={cat.breed}
                  className="img-fluid rounded mb-2"
                  style={{ height: "250px", width: "100%", objectFit: "cover" }}
                />
                <h5>{cat.breed}</h5>
                <div className="d-flex justify-content-around py-2">
                  <Button variant="outline-danger" disabled={!isCenter}>✖</Button>
                  <Button variant="outline-primary" disabled={!isCenter}>❤</Button>
                  <Button
                    variant={isLocked ? "warning" : "outline-warning"}
                    disabled={!isCenter}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLock(cat.id);
                    }}
                  >
                    {isLocked ? "★" : "☆"}
                  </Button>
                </div>
                {isCenter && <div className="explore-overlay">Explore More</div>}
              </div>
            );
          })
        )}

        <Button variant="light" className="circle-btn" onClick={handleNext}>&rarr;</Button>
      </div>
    </div>
  );
};

export default Cats;
