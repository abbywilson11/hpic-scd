import { Link } from "react-router-dom"; // Link for navigation
import { MdHealthAndSafety, MdLocalHospital, MdGroup, MdSchool } from "react-icons/md"; //icons for info cards
import "./InfoSection.css";

// We accept "language" as a prop so this section can display
// its title, description, and card text in English or French.
export default function InfoSection({ language }) {

  // ===============================
  //  TEXT CONTENT FOR BOTH LANGUAGES
  //  Centralizing all strings makes the component easier to maintain,
  //  translate, and explain to a professor/TA.
  // ===============================
  const text = {
    en: {
      sectionTitle: "How HPIC Can Help!",
      sectionBody:
        "We offer many tools and resources for you to discover how to take care of yourself and your loved ones who are affected by Sickle Cell Disease.",

      card1Title: "Early Detection",
      card1Body:
        "Comprehensive screening programs and genetic testing to identify SCD early.",

      card2Title: "Treatment Options",
      card2Body:
        "Access to pain management strategies, medication guidance, and more.",

      card3Title: "Community",
      card3Body:
        "Connect with others, share experiences, and find support groups.",

      card4Title: "Education",
      card4Body:
        "Resources for patients, families, and healthcare providers.",
    },

    fr: {
      sectionTitle: "Comment HPIC peut vous aider !",
      sectionBody:
        "Nous offrons de nombreux outils et ressources pour vous aider à prendre soin de vous et de vos proches touchés par la drépanocytose.",

      card1Title: "Détection précoce",
      card1Body:
        "Programmes de dépistage complets et tests génétiques pour identifier la drépanocytose tôt.",

      card2Title: "Options de traitement",
      card2Body:
        "Accès à des stratégies de gestion de la douleur, des conseils sur les médicaments et plus encore.",

      card3Title: "Communauté",
      card3Body:
        "Connectez-vous avec d’autres personnes, partagez vos expériences et trouvez des groupes de soutien.",

      card4Title: "Éducation",
      card4Body:
        "Ressources pour les patients, les familles et les professionnels de la santé.",
    },
  };

  // Select the correct language block. Defaults to English if undefined.
  const t = text[language] || text.en;

  return (
    <section className="info-section">
      <h2>{t.sectionTitle}</h2>
      <p>{t.sectionBody}</p>

      <div className="info-grid">

        <Link to="/EarlyDetection" className="info-card-link"> {/* Link to Early Detection page */}
          <div className="info-card">
            <div className="info-icon"><MdHealthAndSafety /></div> {/* Icon */}
            <h3>{t.card1Title}</h3>
            <p>{t.card1Body}</p>
          </div>
        </Link>

        {/* Each card links to its respective page using the same format */}
        <Link to="/TreatmentOptions" className="info-card-link">
          <div className="info-card">
            <div className="info-icon"><MdLocalHospital /></div>
            <h3>{t.card2Title}</h3>
            <p>{t.card2Body}</p>
          </div>
        </Link>

        <Link to="/Community" className="info-card-link">
          <div className="info-card">
            <div className="info-icon"><MdGroup /></div>
            <h3>{t.card3Title}</h3>
            <p>{t.card3Body}</p>
          </div>
        </Link>

        <Link to="/Education" className="info-card-link">
          <div className="info-card">
            <div className="info-icon"><MdSchool /></div>
            <h3>{t.card4Title}</h3>
            <p>{t.card4Body}</p>
          </div>
        </Link>

      </div>
    </section>
  );
}
