//this page is jsut text and numbers showing statistics about sickle cell disease 
import React from "react";
import "./statistics.css";

// We accept "language" as a prop so this component can
// show statistics text in English ("en") or French ("fr").
export default function Statistics({ language }) {
  // Centralized text content for both languages.
  // Numbers stay the same, but the sentences underneath change.
  const text = {
    en: {
      stat1Number: "300,000",
      stat1Label: "babies are born with SCD each year",

      stat2Number: "50+",
      stat2Label: "Years average lifespan with treatment",

      stat3Number: "90%",
      stat3Label: "Of SCD cases are in Sub-Saharan Africa",

      stat4Number: "24/7",
      stat4Label: "Support & Resources Available",
    },
    fr: {
      stat1Number: "300 000",
      stat1Label:
        "bébés naissent avec la drépanocytose chaque année",

      stat2Number: "50+",
      stat2Label:
        "Années d’espérance de vie moyenne avec un traitement",

      stat3Number: "90%",
      stat3Label:
        "des cas de drépanocytose se trouvent en Afrique subsaharienne",

      stat4Number: "24/7",
      stat4Label: "Soutien et ressources disponibles",
    },
  };

  // Choose the correct language block; default to English just in case.
  const t = text[language] || text.en;

  return (
    <div className="statistics-container">
      <section className="statistics-section">
        <div className="section">
          <h1>{t.stat1Number}</h1>
          <p>{t.stat1Label}</p>
        </div>

        <div className="section">
          <h1>{t.stat2Number}</h1>
          <p>{t.stat2Label}</p>
        </div>

        <div className="section">
          <h1>{t.stat3Number}</h1>
          <p>{t.stat3Label}</p>
        </div>

        <div className="section">
          <h1>{t.stat4Number}</h1>
          <p>{t.stat4Label}</p>
        </div>
      </section>
    </div>
  );
}
