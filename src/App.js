import React from "react";
import "./App.css";
import NavBar from "./components/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Projects from "./components/pages/Projects.js";

const App = () => {


  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
    </div>
  );
};

export default App;
