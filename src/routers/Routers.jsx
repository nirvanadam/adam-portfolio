import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "../context/AppContext";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/Contact";
import Navbar from "../components/navbar/Navbar";

function Routers() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppProvider>
  );
}

export default Routers;
