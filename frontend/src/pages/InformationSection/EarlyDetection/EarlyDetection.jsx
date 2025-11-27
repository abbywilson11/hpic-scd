import React from "react";
import "./EarlyDetection.css";

// importing images
import eyes from "../../../assets/jaundice.png";
import growth from "../../../assets/growth.png";
import pain from "../../../assets/pain.png";
import infection from "../../../assets/infection.jpg";
import swelling from "../../../assets/swelling.png";
import fatigue from "../../../assets/fatigue.png";

export default function EarlyDetection({ language }) {
  const text = {
    en: {
      pageTitle: "Early Detection",
      introTitle: "Understanding Early Signs of Sickle Cell Disease",
      introBody:
        "Early detection of Sickle Cell Disease (SCD) is crucial for preventing complications and ensuring healthy development. Recognizing symptoms early helps caregivers seek medical attention quickly and begin preventive care programs.",

      symptomsTitle: "Early Symptoms to Look For",

      s1Title: "Swelling of hands and feet",
      s1Body:
        "Often one of the first symptoms in infants, caused by blocked blood flow.",

      s2Title: "Unusual tiredness or fatigue",
      s2Body:
        "Fatigue occurs when sickle cells break down faster than the body can replace them.",

      s3Title: "Yellowing of skin or eyes (jaundice)",
      s3Body:
        "Jaundice happens due to the breakdown of red blood cells, causing bilirubin buildup.",

      s4Title: "Frequent pain episodes",
      s4Body:
        "Episodes occur when sickle-shaped cells block blood flow, causing inflammation.",

      s5Title: "Frequent infections or fevers",
      s5Body:
        "SCD can damage the spleen, reducing immunity and making infections more common.",

      s6Title: "Delayed growth or development",
      s6Body:
        "Children with SCD may grow more slowly due to chronic anemia and low oxygen levels.",

      screeningTitle: "Common Screening Methods",
      screeningList: [
        "Newborn screening (routine in many hospitals)",
        "Hemoglobin electrophoresis",
        "Genetic testing for carrier status",
        "Blood smear examination",
      ],
    },

    fr: {
      pageTitle: "Détection précoce",
      introTitle: "Comprendre les premiers signes de la drépanocytose",
      introBody:
        "La détection précoce de la drépanocytose (SCD) est essentielle pour prévenir les complications et assurer un développement sain. Reconnaître les symptômes tôt aide les proches à consulter rapidement et à débuter des soins préventifs.",

      symptomsTitle: "Symptômes précoces à surveiller",

      s1Title: "Gonflement des mains et des pieds",
      s1Body:
        "Souvent l’un des premiers symptômes chez les nourrissons, causé par une mauvaise circulation sanguine.",

      s2Title: "Fatigue inhabituelle",
      s2Body:
        "La fatigue survient lorsque les globules rouges falciformes se détruisent plus vite que le corps ne peut les remplacer.",

      s3Title: "Jaunissement de la peau ou des yeux (jaunisse)",
      s3Body:
        "La jaunisse apparaît en raison de la dégradation des globules rouges, entraînant une accumulation de bilirubine.",

      s4Title: "Épisodes fréquents de douleur",
      s4Body:
        "Ces épisodes surviennent lorsque les cellules falciformes bloquent la circulation sanguine, provoquant une inflammation.",

      s5Title: "Infections ou fièvres fréquentes",
      s5Body:
        "La drépanocytose peut endommager la rate, diminuant l’immunité et augmentant les risques d’infection.",

      s6Title: "Retard de croissance ou de développement",
      s6Body:
        "Les enfants atteints peuvent grandir plus lentement en raison de l’anémie chronique et du manque d’oxygène.",

      screeningTitle: "Méthodes de dépistage courantes",
      screeningList: [
        "Dépistage néonatal (courant dans plusieurs hôpitaux)",
        "Électrophorèse de l’hémoglobine",
        "Test génétique pour vérifier le statut de porteur",
        "Examen de frottis sanguin",
      ],
    },
  };

  const t = text[language];

  return (
    <div className="page-wrapper">
      {/* Main centered content container */}
      <div className="page-container">
        <h2 className="page-title">{t.pageTitle}</h2>

        {/* Intro Section */}
        <div className="section-block">
          <h3 className="section-title">{t.introTitle}</h3>
          <p>{t.introBody}</p>
        </div>

        {/* Symptoms Section */}
        <div className="section-block">
          <h3 className="section-title">{t.symptomsTitle}</h3>

          <div className="symptom-list">
            <div className="symptom-row">
              <img src={swelling} alt="" className="symptom-icon" />
              <div className="symptom-info">
                <h4>{t.s1Title}</h4>
                <p>{t.s1Body}</p>
              </div>
            </div>

            <div className="symptom-row">
              <img src={fatigue} alt="" className="symptom-icon" />
              <div className="symptom-info">
                <h4>{t.s2Title}</h4>
                <p>{t.s2Body}</p>
              </div>
            </div>

            <div className="symptom-row">
              <img src={eyes} alt="" className="symptom-icon" />
              <div className="symptom-info">
                <h4>{t.s3Title}</h4>
                <p>{t.s3Body}</p>
              </div>
            </div>

            <div className="symptom-row">
              <img src={pain} alt="" className="symptom-icon" />
              <div className="symptom-info">
                <h4>{t.s4Title}</h4>
                <p>{t.s4Body}</p>
              </div>
            </div>

            <div className="symptom-row">
              <img src={infection} alt="" className="symptom-icon" />
              <div className="symptom-info">
                <h4>{t.s5Title}</h4>
                <p>{t.s5Body}</p>
              </div>
            </div>

            <div className="symptom-row">
              <img src={growth} alt="" className="symptom-icon" />
              <div className="symptom-info">
                <h4>{t.s6Title}</h4>
                <p>{t.s6Body}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screening Section */}
        <div className="section-block">
          <h3 className="section-title">{t.screeningTitle}</h3>
          <ul>
            {t.screeningList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
