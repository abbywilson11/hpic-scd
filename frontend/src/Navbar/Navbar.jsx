import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // styling
import logo from "../assets/Logo.png"; // HPIC logo image

export default function Navbar({ language, setLanguage }) {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Text for both languages
  const text = {
    en: {
      symptoms: "Symptoms",
      treatment: "Treatment",
      journal: "My Journal",
      login: "Login / Sign Up",
    },
    fr: {
      symptoms: "Symptômes",
      treatment: "Traitement",
      journal: "Mon journal",
      login: "Connexion / Inscription",
    },
  };

  const t = text[language];

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img
          src={logo}
          alt="HPIC Logo"
          className="logo"
          onClick={() => navigate("/Home")}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Center: Page Buttons */}
      <div className="navbar-center">
        <button onClick={() => navigate("/EarlyDetection")}>
          {t.symptoms}
        </button>
        <button onClick={() => navigate("/TreatmentOptions")}>
          {t.treatment}
        </button>
        <button onClick={() => navigate("/myjournal")}>
          {t.journal}
        </button>
      </div>

      {/* Right: Language + Login */}
      <div className="navbar-end">
        <div className="navbar-leftright">
          {/* EN / FR toggle */}
          <button
            className={`language-btn ${language === "en" ? "active-lang" : ""}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            className={`language-btn ${language === "fr" ? "active-lang" : ""}`}
            onClick={() => setLanguage("fr")}
          >
            FR
          </button>
        </div>

        <button className="login-btn" onClick={() => navigate("/login")}>
          {t.login}
        </button>
      </div>
    </nav>
  );
}
