// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

import AboutMe from "./components/sections/Aboutme.jsx";
import Education from "./components/sections/Education.jsx";


function App() {
  return (
    <Router>
      <Header />
        <Hero />
        <AboutMe/>
      <Education/>
    </Router>
  );
}

export default App;
