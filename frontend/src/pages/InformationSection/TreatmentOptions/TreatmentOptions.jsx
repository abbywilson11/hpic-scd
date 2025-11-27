// import React, { useEffect } from "react";
// import "./TreatmentOptions.css";
// import Table from "./table.jsx";

// export default function TreatmentOptions() {
//   useEffect(() => {
//     fetch("http://localhost:5000/api")
//       .then((res) => res.json())
//       .catch((err) => console.error("Error fetching data:", err));
//   }, []);

//   return (
//     <div className="page-container">
//       <h2 className="page-title">
//         Treatment Options
//         <span className="page-subtitle">
//           Need care now? Use the Hospital Finder below.
//         </span>
//       </h2>

//       {/* ===============================
//            Managing Symptoms Section
//       ================================= */}
//       <div className="section-block">
//         <h3>Managing Symptoms</h3>

//         <p>
//           Managing symptoms day-to-day helps reduce pain crises and lowers the risk of complications.
//           Lifestyle habits, environment, and stress levels play a major role.
//           These strategies should always follow guidance from your healthcare team.
//         </p>

//         <h4 className="subheading">Hydration</h4>
//         <p>
//           Drinking enough water helps keep blood cells flexible, reducing the chance of sickling.
//         </p>
//         <ul>
//           <li>8–10 cups of water per day (unless told otherwise).</li>
//           <li>Increase fluids on hot days or when exercising.</li>
//           <li>Carry a refillable bottle to avoid dehydration.</li>
//         </ul>

//         <h4 className="subheading">Temperature Control</h4>
//         <ul>
//           <li>Avoid exposure to extreme cold or heat.</li>
//           <li>Dress in layers and protect your hands, feet, and head in winter.</li>
//           <li>Avoid sudden temperature changes (e.g., cold water immersion).</li>
//         </ul>

//         <h4 className="subheading">At-Home Pain Management</h4>
//         <ul>
//           <li>Use prescribed medications exactly as directed.</li>
//           <li>Warm compresses, warm baths, and gentle stretching can help ease discomfort.</li>
//           <li>Avoid ice – it can trigger blood vessel constriction.</li>
//           <li>Practice relaxation techniques to reduce stress-induced pain.</li>
//         </ul>
//       </div>

//       {/* ===============================
//            Medical Treatments
//       ================================= */}
//       <div className="section-block">
//         <h3>Medical Treatments</h3>

//         <h4 className="subheading">Hydroxyurea Therapy</h4>
//         <p>
//           Hydroxyurea increases fetal hemoglobin levels, which makes red blood cells less likely to sickle.
//           It is one of the most effective long-term treatments.
//         </p>
//         <ul>
//           <li>Reduces frequency of pain crises.</li>
//           <li>Prevents hospitalizations.</li>
//           <li>Lowers risk of acute chest syndrome.</li>
//         </ul>

//         <h4 className="subheading">Blood Transfusions</h4>
//         <p>
//           Transfusions increase the number of healthy red blood cells and reduce complications.
//         </p>
//         <ul>
//           <li>Used for severe anemia.</li>
//           <li>Recommended for patients with stroke history or high stroke risk.</li>
//           <li>May be used for repeated chest complications.</li>
//         </ul>

//         <h4 className="subheading">Pain Management Plans</h4>
//         <p>
//           A personalized pain action plan may include:
//         </p>
//         <ul>
//           <li>Safe home medications.</li>
//           <li>Instructions for worsening symptoms.</li>
//           <li>Indicators for when to go to the hospital.</li>
//         </ul>

//         <h4 className="subheading">Bone Marrow / Stem Cell Transplant</h4>
//         <p>
//           Currently the only potential cure for sickle cell disease.
//           It requires a suitable donor match and may not be appropriate for everyone.
//         </p>
//       </div>

//       {/* ===============================
//            Ongoing Care
//       ================================= */}
//       <div className="section-block">
//         <h3>Ongoing Care</h3>

//         <h4 className="subheading">Regular Check-Ups</h4>
//         <p>Routine monitoring helps detect issues early and adjust treatment plans.</p>

//         <h4 className="subheading">Vaccinations</h4>
//         <ul>
//           <li>Annual flu shot recommended.</li>
//           <li>Additional pneumonia vaccines may be needed.</li>
//           <li>COVID-19 vaccination as advised by your care team.</li>
//         </ul>

//         <h4 className="subheading">Healthy Living</h4>
//         <ul>
//           <li>Balanced diet with fruits, vegetables, and lean proteins.</li>
//           <li>Folic acid supplements may be recommended for red blood cell production.</li>
//           <li>Stress-reducing routines like stretching or mindfulness.</li>
//         </ul>
//       </div>

//       {/* ===============================
//            TABLE SECTION
//       ================================= */}
//       <div className="table-section">
//         <Table />
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import "./TreatmentOptions.css";
import Table from "./table.jsx";
import { API_BASE_URL } from "../../../apiConfig";

// We now accept "language" as a prop so this page
// can display content in English ("en") or French ("fr")
// based on the global state in App.jsx.
export default function TreatmentOptions({ language }) {
  // This useEffect is kept as in your original code.
  // It shows how the frontend would contact a backend API.
  // Right now, the response isn't used in the UI, but the pattern is in place.
  useEffect(() => {
    fetch(`${API_BASE_URL}/api`)
      .then((res) => res.json())
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // ==============================================
  //  TEXT CONTENT FOR BOTH LANGUAGES
  //  We centralize all user-facing strings here so
  //  it's easy to switch languages and to explain
  //  the translation pattern to a TA or professor.
  // ==============================================
  const text = {
    en: {
      pageTitle: "Treatment Options",
      pageSubtitle: "Need care now? Use the Hospital Finder below.",

      // Managing Symptoms section
      managingTitle: "Managing Symptoms",
      managingBody:
        "Managing symptoms day-to-day helps reduce pain crises and lowers the risk of complications. Lifestyle habits, environment, and stress levels play a major role. These strategies should always follow guidance from your healthcare team.",

      hydrationTitle: "Hydration",
      hydrationBody:
        "Drinking enough water helps keep blood cells flexible, reducing the chance of sickling.",
      hydrationList: [
        "8–10 cups of water per day (unless told otherwise).",
        "Increase fluids on hot days or when exercising.",
        "Carry a refillable bottle to avoid dehydration.",
      ],

      tempTitle: "Temperature Control",
      tempList: [
        "Avoid exposure to extreme cold or heat.",
        "Dress in layers and protect your hands, feet, and head in winter.",
        "Avoid sudden temperature changes (e.g., cold water immersion).",
      ],

      homePainTitle: "At-Home Pain Management",
      homePainList: [
        "Use prescribed medications exactly as directed.",
        "Warm compresses, warm baths, and gentle stretching can help ease discomfort.",
        "Avoid ice – it can trigger blood vessel constriction.",
        "Practice relaxation techniques to reduce stress-induced pain.",
      ],

      // Medical Treatments section
      medicalTitle: "Medical Treatments",

      hydroTitle: "Hydroxyurea Therapy",
      hydroBody:
        "Hydroxyurea increases fetal hemoglobin levels, which makes red blood cells less likely to sickle. It is one of the most effective long-term treatments.",
      hydroList: [
        "Reduces frequency of pain crises.",
        "Prevents hospitalizations.",
        "Lowers risk of acute chest syndrome.",
      ],

      transfusionTitle: "Blood Transfusions",
      transfusionBody:
        "Transfusions increase the number of healthy red blood cells and reduce complications.",
      transfusionList: [
        "Used for severe anemia.",
        "Recommended for patients with stroke history or high stroke risk.",
        "May be used for repeated chest complications.",
      ],

      painPlanTitle: "Pain Management Plans",
      painPlanBody: "A personalized pain action plan may include:",
      painPlanList: [
        "Safe home medications.",
        "Instructions for worsening symptoms.",
        "Indicators for when to go to the hospital.",
      ],

      transplantTitle: "Bone Marrow / Stem Cell Transplant",
      transplantBody:
        "Currently the only potential cure for sickle cell disease. It requires a suitable donor match and may not be appropriate for everyone.",

      // Ongoing Care section
      ongoingTitle: "Ongoing Care",

      checkupsTitle: "Regular Check-Ups",
      checkupsBody:
        "Routine monitoring helps detect issues early and adjust treatment plans.",

      vaccinesTitle: "Vaccinations",
      vaccinesList: [
        "Annual flu shot recommended.",
        "Additional pneumonia vaccines may be needed.",
        "COVID-19 vaccination as advised by your care team.",
      ],

      healthyTitle: "Healthy Living",
      healthyList: [
        "Balanced diet with fruits, vegetables, and lean proteins.",
        "Folic acid supplements may be recommended for red blood cell production.",
        "Stress-reducing routines like stretching or mindfulness.",
      ],

      tableNoteTitle: "Hospital Finder",
      // The Table component itself displays structured data; we leave it as-is.
    },

    fr: {
      pageTitle: "Options de traitement",
      pageSubtitle:
        "Besoin de soins maintenant? Utilisez l’outil de recherche d’hôpitaux ci-dessous.",

      // Managing Symptoms section
      managingTitle: "Gestion des symptômes",
      managingBody:
        "La gestion quotidienne des symptômes aide à réduire les crises douloureuses et le risque de complications. Les habitudes de vie, l’environnement et le niveau de stress jouent un rôle important. Ces stratégies doivent toujours suivre les recommandations de votre équipe médicale.",

      hydrationTitle: "Hydratation",
      hydrationBody:
        "Boire suffisamment d’eau aide à garder les globules rouges plus souples, ce qui réduit le risque de falciformation.",
      hydrationList: [
        "8 à 10 verres d’eau par jour (sauf indication contraire).",
        "Augmenter l’hydratation par temps chaud ou lors d’exercices.",
        "Garder une bouteille réutilisable pour éviter la déshydratation.",
      ],

      tempTitle: "Contrôle de la température",
      tempList: [
        "Éviter l’exposition à un froid ou à une chaleur extrêmes.",
        "Porter des couches de vêtements et protéger les mains, les pieds et la tête en hiver.",
        "Éviter les changements brusques de température (par exemple, immersion dans l’eau froide).",
      ],

      homePainTitle: "Gestion de la douleur à domicile",
      homePainList: [
        "Utiliser les médicaments prescrits exactement comme indiqué.",
        "Les compresses chaudes, les bains tièdes et les étirements doux peuvent aider à soulager l’inconfort.",
        "Éviter la glace – elle peut provoquer une constriction des vaisseaux sanguins.",
        "Pratiquer des techniques de relaxation pour réduire la douleur liée au stress.",
      ],

      // Medical Treatments section
      medicalTitle: "Traitements médicaux",

      hydroTitle: "Traitement par hydroxyurée",
      hydroBody:
        "L’hydroxyurée augmente le taux d’hémoglobine fœtale, ce qui rend les globules rouges moins susceptibles de prendre une forme falciforme. C’est l’un des traitements à long terme les plus efficaces.",
      hydroList: [
        "Réduit la fréquence des crises douloureuses.",
        "Diminue les hospitalisations.",
        "Réduit le risque de syndrome thoracique aigu.",
      ],

      transfusionTitle: "Transfusions sanguines",
      transfusionBody:
        "Les transfusions augmentent le nombre de globules rouges sains et réduisent les complications.",
      transfusionList: [
        "Utilisées en cas d’anémie sévère.",
        "Recommandées chez les patients ayant des antécédents d’AVC ou un risque élevé.",
        "Peuvent être utilisées en cas de complications thoraciques répétées.",
      ],

      painPlanTitle: "Plans de prise en charge de la douleur",
      painPlanBody: "Un plan personnalisé de gestion de la douleur peut inclure :",
      painPlanList: [
        "Des médicaments sécuritaires à utiliser à la maison.",
        "Des instructions en cas d’aggravation des symptômes.",
        "Des indications sur le moment où se rendre à l’hôpital.",
      ],

      transplantTitle: "Greffe de moelle osseuse / cellules souches",
      transplantBody:
        "Actuellement, la seule option potentielle de guérison de la drépanocytose. Elle nécessite un donneur compatible et ne convient pas à tous les patients.",

      // Ongoing Care section
      ongoingTitle: "Suivi à long terme",

      checkupsTitle: "Suivis médicaux réguliers",
      checkupsBody:
        "Un suivi régulier permet de détecter les problèmes tôt et d’adapter le plan de traitement.",

      vaccinesTitle: "Vaccinations",
      vaccinesList: [
        "Vaccin annuel contre la grippe recommandé.",
        "Des vaccins supplémentaires contre la pneumonie peuvent être nécessaires.",
        "Vaccination contre la COVID-19 selon les conseils de votre équipe soignante.",
      ],

      healthyTitle: "Mode de vie sain",
      healthyList: [
        "Alimentation équilibrée incluant fruits, légumes et protéines maigres.",
        "Des suppléments d’acide folique peuvent être recommandés pour la production des globules rouges.",
        "Routines de gestion du stress comme les étirements ou la pleine conscience.",
      ],

      tableNoteTitle: "Recherche d’hôpitaux",
    },
  };

  // Choose the correct language block.
  // If for some reason "language" is undefined, we default to English.
  const t = text[language] || text.en;

  return (
    /* ✅ Full-page mint background */
    <div className="page-wrapper">
      {/* ✅ Main centered content width */}
      <div className="page-container">
        <h2 className="page-title">
          {/* Page title and subtitle now read from the translation object */}
          {t.pageTitle}
          <span className="page-subtitle">{t.pageSubtitle}</span>
        </h2>

        {/* ===============================
            Managing Symptoms Section
        ================================= */}
        <div className="section-block">
          <h3>{t.managingTitle}</h3>

          <p>{t.managingBody}</p>

          <h4 className="subheading">{t.hydrationTitle}</h4>
          <p>{t.hydrationBody}</p>
          <ul>
            {t.hydrationList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="subheading">{t.tempTitle}</h4>
          <ul>
            {t.tempList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="subheading">{t.homePainTitle}</h4>
          <ul>
            {t.homePainList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ===============================
            Medical Treatments
        ================================= */}
        <div className="section-block">
          <h3>{t.medicalTitle}</h3>

          <h4 className="subheading">{t.hydroTitle}</h4>
          <p>{t.hydroBody}</p>
          <ul>
            {t.hydroList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="subheading">{t.transfusionTitle}</h4>
          <p>{t.transfusionBody}</p>
          <ul>
            {t.transfusionList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="subheading">{t.painPlanTitle}</h4>
          <p>{t.painPlanBody}</p>
          <ul>
            {t.painPlanList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="subheading">{t.transplantTitle}</h4>
          <p>{t.transplantBody}</p>
        </div>

        {/* ===============================
            Ongoing Care
        ================================= */}
        <div className="section-block">
          <h3>{t.ongoingTitle}</h3>

          <h4 className="subheading">{t.checkupsTitle}</h4>
          <p>{t.checkupsBody}</p>

          <h4 className="subheading">{t.vaccinesTitle}</h4>
          <ul>
            {t.vaccinesList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="subheading">{t.healthyTitle}</h4>
          <ul>
            {t.healthyList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ===============================
            TABLE SECTION
        ================================= */}
        <div className="section-block">
          {/* The Table component itself could also be internationalized later
              (for example, translating column headers), but here we simply
              render it under the treatment information. */}
          <Table language={language} />
        </div>
      </div>
    </div>
  );
}
