import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./views/Hero";
import About from "./views/About";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
