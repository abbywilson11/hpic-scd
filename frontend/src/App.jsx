import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./pages/HomePage/Home";
import ScrollToTop from "./ScrollToTop";
import Signup from "./pages/Signup";
// Navbar buttons imported separately
import MyJournal from "./Navbar/buttons/MyJournal";
import Language from "./Navbar/buttons/Language";
import Login from "./Navbar/buttons/Login";

// New InfoSection pages
import TreatmentOptions from "./pages/InformationSection/TreatmentOptions/TreatmentOptions";
import Community from "./pages/InformationSection/Community/Community";
import Education from "./pages/InformationSection/Education/Education";
import EarlyDetection from "./pages/InformationSection/EarlyDetection/EarlyDetection";

// styling
import "./App.css";

function App() {
  // Global language state
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar language={language} setLanguage={setLanguage} />

        <div className="content">
          <Routes>

            {/* OPTION 1: Show Home at "/" */}
            <Route path="/" element={<Home language={language} />} />

            {/* Main pages */}
            <Route path="/Home" element={<Home language={language} />} />
            <Route
              path="/EarlyDetection"
              element={<EarlyDetection language={language} />}
            />
            <Route
              path="/TreatmentOptions"
              element={<TreatmentOptions language={language} />}
            />
            <Route
              path="/myjournal"
              element={<MyJournal language={language} />}
            />
            {/* Info pages */}
            <Route
              path="/Community"
              element={<Community language={language} />}
            />
            <Route
              path="/Education"
              element={<Education language={language} />}
            />
            <Route
              path="/ENFR"
              element={<Language language={language} />}
            />
            <Route
              path="/login"
              element={<Login language={language} />}
            />

          </Routes>
        </div>

        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
