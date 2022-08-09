import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
