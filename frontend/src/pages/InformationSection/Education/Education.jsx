import React, { useEffect } from "react";
import "./Education.css";
import { API_BASE_URL } from "../../../apiConfig"; // Importing base URL for API from backend for rendering

// We now accept "language" as a prop so this page can display
// all text, titles, and brochure labels in English or French.
export default function Education({ language }) {
  // PDF filenames remain the same because they already include both
  // EN and FR versions. We only translate how they DISPLAY on buttons.
 useEffect(() => {
  fetch(`${API_BASE_URL}/api/health`)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching data:", err));
}, []);

  const brochures = [
    "ChildrenWithSCD-EN.pdf",
    "QualityStandard-EN.pdf",
    "PatientGuide-EN.pdf",
    "ChildrenWithSCD-FR.pdf",
    "QualityStandard-FR.pdf",
    "PatientGuide-FR.pdf",
  ];

  // Fetches a selected PDF from the backend and opens it in a new tab.
  // This part remains unchanged.
const openBrochure = async (fileName) => {
  console.log("BROCHURE URL:", `${API_BASE_URL}/api/brochures/${fileName}`);

  const response = await fetch(`${API_BASE_URL}/api/brochures/${fileName}`);
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
};


  // ============================================
  //  BILINGUAL TEXT CONTENT (EN + FR)
  //  Centralized to make translation cleaner.
  // ============================================
  const text = {
    en: {
      pageTitle: "Education",
      whatIsTitle: "What Is Sickle Cell Disease?",
      whatIsBody:
        "Sickle Cell Disease (SCD) is an inherited blood disorder that affects the shape of red blood cells, causing them to become rigid and crescent-shaped. These cells break down more easily and can block blood flow, leading to complications.",

      whyTitle: "Why Education Matters",
      whyBody:
        "Understanding SCD allows individuals, caregivers, and communities to better support those living with the condition. Awareness helps reduce stigma, improves early detection, and empowers families to access proper care.",

      brochureTitle: "Brochures",

      brochureLabels: {
        ChildrenWithSCD_EN: "Children with SCD (English)",
        QualityStandard_EN: "Quality Standard (English)",
        PatientGuide_EN: "Patient Guide (English)",
        ChildrenWithSCD_FR: "Children with SCD (French)",
        QualityStandard_FR: "Quality Standard (French)",
        PatientGuide_FR: "Patient Guide (French)",
      },
    },

    fr: {
      pageTitle: "Éducation",
      whatIsTitle: "Qu’est-ce que la drépanocytose ?",
      whatIsBody:
        "La drépanocytose est une maladie héréditaire du sang qui affecte la forme des globules rouges, les rendant rigides et en forme de croissant. Ces cellules se dégradent plus facilement et peuvent bloquer la circulation sanguine, entraînant des complications.",

      whyTitle: "Pourquoi l’éducation est importante",
      whyBody:
        "Comprendre la drépanocytose permet aux individus, aux familles et aux communautés de mieux soutenir les personnes atteintes. La sensibilisation réduit la stigmatisation, améliore la détection précoce et permet aux familles d’accéder à des soins appropriés.",

      brochureTitle: "Brochures",

      brochureLabels: {
        ChildrenWithSCD_EN: "Enfants atteints de drépanocytose (anglais)",
        QualityStandard_EN: "Norme de qualité (anglais)",
        PatientGuide_EN: "Guide du patient (anglais)",
        ChildrenWithSCD_FR: "Enfants atteints de drépanocytose (français)",
        QualityStandard_FR: "Norme de qualité (français)",
        PatientGuide_FR: "Guide du patient (français)",
      },
    },
  };

  // Select the correct language block; default to English if undefined.
  const t = text[language] || text.en;

  // Function to convert file name → translated display name
  const getBrochureLabel = (fileName) => {
    const base = fileName.replace(".pdf", ""); // e.g., "ChildrenWithSCD-EN"
    const cleaned = base.replace("-", "_");    // "ChildrenWithSCD_EN"
    return t.brochureLabels[cleaned] || base;
  };

  return (
    <div className="page-container">
      <h2 className="page-title">{t.pageTitle}</h2>

      <div className="section-row">
        <div className="section-block">
          <h3>{t.whatIsTitle}</h3>
          <p>{t.whatIsBody}</p>
        </div>

        <div className="section-block">
          <h3>{t.whyTitle}</h3>
          <p>{t.whyBody}</p>
        </div>
      </div>

      {/* Brochures Section */}
      <h2 className="brochure-title">{t.brochureTitle}</h2>

      <div className="brochure-buttons">
        {brochures.map((fileName, index) => (
          <button
            key={index}
            className="brochure-button"
            onClick={() => openBrochure(fileName)}
          >
            {getBrochureLabel(fileName)}
          </button>
        ))}
      </div>
    </div>
  );
}
