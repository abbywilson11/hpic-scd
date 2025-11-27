import React from "react";
import "./Home.css";
import ribbon from "../../assets/Ribbon.jpg";
// importing info and statistics for home page components
import InfoSection from "../InformationSection/InfoSection";
import StatisticsSection from "../StatisticsSection/statistics";

export default function Home({ language }) {
  // Text for both languages
  const text = {
    en: {
      h1: "7.74 Million People",
      h2: "live with SCD worldwide",
      p1: "Sickle-cell disease (SCD) is a genetic disorder that affects hemoglobin, the molecule in red blood cells responsible for carrying oxygen.",
      p2: "SCD is most common in individuals of African, Mediterranean, Middle Eastern, and Indian descent.",
      p3: "Early diagnosis is crucial for managing the disease and preventing complications.",
    },
    fr: {
      h1: "7,74 millions de personnes",
      h2: "vivent avec la drépanocytose dans le monde",
      p1: "La drépanocytose (SCD) est une maladie génétique qui affecte l’hémoglobine, la molécule des globules rouges responsable du transport de l’oxygène.",
      p2: "La maladie est plus fréquente chez les personnes d’ascendance africaine, méditerranéenne, moyen-orientale et indienne.",
      p3: "Un diagnostic précoce est essentiel pour bien gérer la maladie et prévenir les complications.",
    },
  };

  const t = text[language] || text.en; // fallback to English just in case

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>{t.h1}</h1>
          <h2>{t.h2}</h2>

          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </div>

        <div className="hero-image">
          <img src={ribbon} alt="Awareness Ribbon" />
        </div>
      </section>

      <div>
        {/* Pass language down so you can translate these later too */}
        <InfoSection language={language} />
        <StatisticsSection language={language} />
      </div>
    </div>
  );
}
