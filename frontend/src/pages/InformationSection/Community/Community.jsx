import React from "react";

// We accept "language" as a prop so this page can display
// its content in English ("en") or French ("fr").
export default function Community({ language }) {
  // ===============================
  //  TEXT CONTENT FOR BOTH LANGUAGES
  //  Centralizing strings here makes translation and maintenance easier.
  // ===============================
  const text = {
    en: {
      pageTitle: "Community",
      pageBody:
        "Connect with others, share experiences, and explore support networks for individuals and families affected by Sickle Cell Disease.",
    },
    fr: {
      pageTitle: "Communauté",
      pageBody:
        "Connectez-vous avec d’autres personnes, partagez vos expériences et explorez des réseaux de soutien pour les personnes et familles touchées par la drépanocytose.",
    },
  };

  // Choose the correct language object (fallback to English).
  const t = text[language] || text.en;

  return (
    <div className="community-container" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{t.pageTitle}</h1>
      <p>{t.pageBody}</p>
    </div>
  );
}

