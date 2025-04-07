import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import   { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import CustomNavbar  from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Dogs from "./components/dog";
import Cats  from "./components/cat";
import Contact  from "./components/contact";

const App = () => {
  
  return (
<Router>
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog" element={<Dogs/>} />
        <Route path="/cat" element={<Cats/>} />
        <Route path="/contact" element={<Contact/>} />
         
      </Routes>

      <Footer  />
    </Router>
  );
};

export default App;
