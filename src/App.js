import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EquiSplit from "./pages/EquiSplit";
import KingdomArabic from "./pages/KingdomArabic";
import KingdomArabicDownload from "./pages/KingdomArabicDownload";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import KingdomArabicPrivacy from "./pages/KingdomArabicPrivacy";
import StarDate from "./pages/StarDate";
import StarDatePrivacy from "./pages/StarDatePrivacy";
import StarDateTerms from "./pages/StarDateTerms";
import PrayerPause from "./pages/PrayerPause";
import PrayerPausePrivacy from "./pages/PrayerPausePrivacy";
import PrayerPauseTerms from "./pages/PrayerPauseTerms";
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
        <Route path="/kingdom-arabic/download" element={<KingdomArabicDownload />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/kingdom-arabic-privacy" element={<KingdomArabicPrivacy />} />
        <Route path="/star-date" element={<StarDate />} />
        <Route path="/star-date-privacy" element={<StarDatePrivacy />} />
        <Route path="/star-date-terms" element={<StarDateTerms />} />
        <Route path="/prayer-pause" element={<PrayerPause />} />
        <Route path="/prayer-pause-privacy" element={<PrayerPausePrivacy />} />
        <Route path="/prayer-pause-terms" element={<PrayerPauseTerms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;