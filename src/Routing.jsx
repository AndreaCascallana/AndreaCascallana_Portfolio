import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import About from "./views/About";
import Plicoga from "./views/Plicoga";
import Key from "./views/Key";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/plicoga" element={<Plicoga />} />
      <Route path="/key" element={<Key />} />
    </Routes>
  );
};

export default Routing;
