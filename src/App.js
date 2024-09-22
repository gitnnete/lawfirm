import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (1 second)
      once: false,     // Whether animation should happen only once
      mirror: true     // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
