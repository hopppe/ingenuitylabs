import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EquiSplit from "./pages/EquiSplit";
import KingdomArabic from "./pages/KingdomArabic";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import KingdomArabicPrivacy from "./pages/KingdomArabicPrivacy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equisplit" element={<EquiSplit />} />
        <Route path="/kingdom-arabic" element={<KingdomArabic />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/kingdom-arabic-privacy" element={<KingdomArabicPrivacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;