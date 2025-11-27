// footer is just for show! the links do not work and the info is placeholder

import React from "react";
import "./Footer.css";

// We accept "language" as a prop so the footer text
// can be displayed in English ("en") or French ("fr").
export default function Footer({ language }) {
  const text = {
    en: {
      orgTitle: "HPIC",
      orgBody:
        "Health Promotion International Centre\nEmpowering lives through education, support, and comprehensive care for sickle-cell disease.",

      resourcesTitle: "Resources",
      resources: ["Patient Portal", "Support Groups", "Publications", "FAQ"],

      contactTitle: "Contact",
      emailLabel: "Email",
      phoneLabel: "Phone",
      emergencyLabel: "Emergency",

      copyright: "All rights reserved.",
    },
    fr: {
      orgTitle: "HPIC",
      orgBody:
        "Health Promotion International Centre\nAccompagner les personnes touchées par la drépanocytose grâce à l’éducation, au soutien et à des soins complets.",

      resourcesTitle: "Ressources",
      resources: [
        "Portail patient",
        "Groupes de soutien",
        "Publications",
        "FAQ",
      ],

      contactTitle: "Contact",
      emailLabel: "Courriel",
      phoneLabel: "Téléphone",
      emergencyLabel: "Urgence",

      copyright: "Tous droits réservés.",
    },
  };

  const t = text[language] || text.en;

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Footer section PLACEHOLDER INFO NOT REAL */}
        <div>
          <h4>{t.orgTitle}</h4>
          <p>
            {t.orgBody.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div>
          <h4>{t.resourcesTitle}</h4>
          <ul>
            {t.resources.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{t.contactTitle}</h4>
          <p>{t.emailLabel}: info@hpic.org</p>
          <p>{t.phoneLabel}: 1-800-HPIC-HELP</p>
          <p>
            {t.emergencyLabel}: 911
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} HPIC. {t.copyright} {/* current year */}
      </div>
    </footer>
  );
}
