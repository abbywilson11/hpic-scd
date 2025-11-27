// adding .jsx file for error handlign when user clicks on it but we dont have anything written yet
import React from "react";

export default function Language({ language }) {
  // Bilingual text content
  const text = {
    en: {
      title: "Language Settings",
      subtitle:
        "Switch between English and French using the EN / FR button in the navbar.",
      description:
        "This page is a placeholder for future language resources or accessibility tools.",
    },
    fr: {
      title: "Paramètres de langue",
      subtitle:
        "Basculez entre l’anglais et le français en utilisant le bouton EN / FR dans la barre de navigation.",
      description:
        "Cette page sert de modèle pour de futures ressources linguistiques ou outils d’accessibilité.",
    },
  };

  const t = text[language] || text.en;

  return (
    <div className="Language-container">
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <p>{t.description}</p>
    </div>
  );
}
