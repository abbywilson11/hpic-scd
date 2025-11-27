// adding .jsx file for error handlign when user clicks on it but we dont have anything written yet
import React from "react";

export default function Login({ language }) {
  // Bilingual text
  const text = {
    en: {
      title: "Login / Sign Up",
      subtitle: "Welcome to the HPIC access portal.",
      description:
        "This page is a placeholder for the future login and authentication system.",
    },
    fr: {
      title: "Connexion / Inscription",
      subtitle: "Bienvenue sur le portail d’accès de HPIC.",
      description:
        "Cette page sert de modèle pour le futur système de connexion et d’authentification.",
    },
  };

  // Gets text in correct language (defaults to EN)
  const t = text[language] || text.en;

  return (
    <div className="login-container">
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <p>{t.description}</p>
    </div>
  );
}
