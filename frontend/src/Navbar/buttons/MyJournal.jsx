// // import React, { useState, useEffect } from "react"
// // import "./MyJournal.css"

// // export default function MyJournal() {
// //   //stores everything typed into the form
// //   const [form, setForm] = useState({
// //     date: "",
// //     symptom: "",
// //     severity: "Mild",
// //     notes: "",
// //   })


// //   const [entries, setEntries] = useState([])//holds all saved journal entries
// //   const [editingId, setEditingId] = useState(null)//checks whether user is editing an entry
// //   const [loaded, setLoaded] = useState(false)//checks if data has been loaded from localStorage yet
// //   const [error, setError] = useState("")//holds error messages for missing fields

// //   //runs when the app first opens and loads old saved entries
// //   useEffect(() => {
// //     const saved = localStorage.getItem("journalEntries")
// //     console.log("App loaded: checking storage...");
// //     //if smt is in storage converts it back to js and stores it
// //     if (saved) {
// //       console.log("Found stored entries:", JSON.parse(saved))
// //       setEntries(JSON.parse(saved))
// //     } else{
// //       console.log("No saved entries found in storage")
// //     }
// //     setLoaded(true)
// //   }, [])

// //   //saves entries to localStorage only after initial load
// //   useEffect(() => {
// //     if (loaded) {
// //       localStorage.setItem("journalEntries", JSON.stringify(entries))
// //     }
// //   }, [entries, loaded])

// //   //runs when user types in any input field
// //   const updateField = (e) => {
// //     const { name, value } = e.target
// //     console.log(`Updating field: ${name} →`, value)
// //     //updates the changed field but keeps the rest of the form the same
// //     setForm((prev) => ({ ...prev, [name]: value }))
// //     setError("") // clears error while typing
// //   }

// //   //resets the form and exits the editing mode
// //   const clearForm = () => {
// //     setForm({ date: "", symptom: "", severity: "Mild", notes: "" })
// //     setEditingId(null)
// //     setError("")
// //   }

// //   //runs when user clicks add or update
// //   const handleSave = () => {
// //     const missingDate = !form.date
// //     const missingSymptom = !form.symptom

// //     console.log("Attempting to save entry:", form)

// //     if (missingDate && missingSymptom) {
// //       console.log("Missing BOTH date + symptom")
// //       setError("Please enter a date and a symptom.")
// //       return
// //     }

// //     if (missingDate) {
// //       console.log("Missing date")
// //       setError("Please enter a date.")
// //       return
// //     }

// //     if (missingSymptom) {
// //       console.log("Missing symptom")
// //       setError("Please enter a symptom.")
// //       return
// //     }
// // //keeps old id if editing or make new one if adding
// //     const newEntry = { ...form, id: editingId || Date.now() }
// // //updates or add the entry in the entries list
// //     setEntries((prev) =>
// //       editingId
// //         ? prev.map((e) => (e.id === editingId ? newEntry : e)) //editing:replace the matching entry
// //         : [newEntry, ...prev] // adding: puts newest at the top
// //     )

// //     clearForm()
// //   }

// //   //loads entry into form for editing
// //   const handleEdit = (entry) => {
// //     setEditingId(entry.id)
// //     setForm({
// //       date: entry.date,
// //       symptom: entry.symptom,
// //       severity: entry.severity,
// //       notes: entry.notes,
// //     })
// //     setError("")
// //   }

// //   // deletes entry permanently
// //   const handleDelete = (id) => {
// //     console.log("Deleting entry ID:", id)
// //     setEntries((prev) => prev.filter((e) => e.id !== id))
// //     if (editingId === id) clearForm() //if user editing this entry rest the form
// //   }

// //   return (
// //     <div className="journal-page">
// //       <h1>Symptom Journal</h1>

// //       <div className="form">
// //         {/* Shows error only when message exists */}
// //         {error && <p className="error">{error}</p>}

// //         <label>Date</label>
// //         <input
// //           type="date"
// //           name="date"
// //           value={form.date}
// //           onChange={updateField}
// //         />

// //         <label>Symptom</label>
// //         <input
// //           type="text"
// //           name="symptom"
// //           placeholder="e.g., headache, fatigue"
// //           value={form.symptom}
// //           onChange={updateField}
// //         />

// //         <label>Severity</label>
// //         <select name="severity" value={form.severity} onChange={updateField}>
// //           <option>Mild</option>
// //           <option>Moderate</option>
// //           <option>Severe</option>
// //         </select>

// //         <label>Notes</label>
// //         <textarea
// //           name="notes"
// //           placeholder="Optional notes..."
// //           value={form.notes}
// //           onChange={updateField}
// //           rows="5"
// //         />

// //         <div className="buttons">
// //           <button type="button" onClick={handleSave}>
// //             {editingId ? "Update Entry" : "Add Entry"}
// //           </button>

// //           {editingId && (
// //             <button type="button" onClick={clearForm}>Cancel</button>
// //           )}
// //         </div>
// //       </div>

// //       <h2>All Entries</h2>

// //       <ul className="entries">
// //         {entries.length === 0 && <li className="empty">No entries yet.</li>}

// //         {entries.map((entry) => (
// //           <li key={entry.id}>
// //             <div>
// //               <strong>{entry.date}</strong> — {entry.symptom || "(No symptom)"} (
// //               {entry.severity})
// //             </div>

// //             {entry.notes && <div className="notes">{entry.notes}</div>}

// //             <div className="entry-buttons">
// //               <button onClick={() => handleEdit(entry)}>Edit</button>
// //               <button onClick={() => handleDelete(entry.id)}>Delete</button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   )
// // }
// import React, { useState, useEffect } from "react";
// import "./MyJournal.css";

// export default function MyJournal() {
//   const [form, setForm] = useState({
//     date: "",
//     symptom: "",
//     severity: "Mild",
//     notes: "",
//   });

//   const [entries, setEntries] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [loaded, setLoaded] = useState(false);
//   const [error, setError] = useState("");

//   // Load stored entries on first render
//   useEffect(() => {
//     const saved = localStorage.getItem("journalEntries");
//     if (saved) setEntries(JSON.parse(saved));
//     setLoaded(true);
//   }, []);

//   // Save entries when updated
//   useEffect(() => {
//     if (loaded) {
//       localStorage.setItem("journalEntries", JSON.stringify(entries));
//     }
//   }, [entries, loaded]);

//   const updateField = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     setError("");
//   };

//   const clearForm = () => {
//     setForm({ date: "", symptom: "", severity: "Mild", notes: "" });
//     setEditingId(null);
//   };

//   const handleSave = () => {
//     if (!form.date || !form.symptom) {
//       setError("Please enter a date and symptom.");
//       return;
//     }

//     const newEntry = { ...form, id: editingId || Date.now() };

//     setEntries((prev) =>
//       editingId
//         ? prev.map((e) => (e.id === editingId ? newEntry : e))
//         : [newEntry, ...prev]
//     );

//     clearForm();
//   };

//   const handleEdit = (entry) => {
//     setEditingId(entry.id);
//     setForm(entry);
//   };

//   const handleDelete = (id) => {
//     setEntries((prev) => prev.filter((e) => e.id !== id));
//     if (editingId === id) clearForm();
//   };

//   return (
//     <div className="page-container">
//       <h2 className="page-title">Symptom Journal</h2>

//       {/* FORM SECTION */}
//       <div className="section-block">
//         {error && <p className="error">{error}</p>}

//         <label>Date</label>
//         <input type="date" name="date" value={form.date} onChange={updateField} />

//         <label>Symptom</label>
//         <input
//           type="text"
//           name="symptom"
//           placeholder="e.g., headache, fatigue"
//           value={form.symptom}
//           onChange={updateField}
//         />

//         <label>Severity</label>
//         <select name="severity" value={form.severity} onChange={updateField}>
//           <option>Mild</option>
//           <option>Moderate</option>
//           <option>Severe</option>
//         </select>

//         <label>Notes</label>
//         <textarea
//           name="notes"
//           placeholder="Optional notes..."
//           value={form.notes}
//           onChange={updateField}
//           rows="5"
//         />

//         <div className="journal-buttons">
//           <button onClick={handleSave}>
//             {editingId ? "Update Entry" : "Add Entry"}
//           </button>

//           {editingId && (
//             <button className="cancel" onClick={clearForm}>
//               Cancel
//             </button>
//           )}
//         </div>
//       </div>

//       {/* ENTRIES LIST */}
//       <div className="section-block">
//         <h3 className="section-title">All Entries</h3>

//         {entries.length === 0 ? (
//           <p className="empty">No entries yet.</p>
//         ) : (
//           entries.map((entry) => (
//             <div key={entry.id} className="journal-item">
//               <strong>{entry.date}</strong> — {entry.symptom} ({entry.severity})

//               {entry.notes && <p className="note">{entry.notes}</p>}

//               <div className="entry-buttons">
//                 <button onClick={() => handleEdit(entry)}>Edit</button>
//                 <button className="delete" onClick={() => handleDelete(entry.id)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "./MyJournal.css";

// We now accept "language" as a prop so this component can display
// all text (labels, buttons, messages) in English ("en") or French ("fr").
export default function MyJournal({ language }) {
  const [form, setForm] = useState({
    date: "",
    symptom: "",
    severity: "Mild",
    notes: "",
  });

  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");

  // =========================================
  //  BILINGUAL UI TEXT (EN + FR)
  //  Centralized here so the logic below stays the same
  //  and only the text changes based on "language".
  // =========================================
  const text = {
    en: {
      title: "Symptom Journal",
      errorRequired: "Please enter a date and symptom.",

      dateLabel: "Date",
      symptomLabel: "Symptom",
      symptomPlaceholder: "e.g., headache, fatigue",
      severityLabel: "Severity",
      severityOptions: ["Mild", "Moderate", "Severe"],
      notesLabel: "Notes",
      notesPlaceholder: "Optional notes...",

      addButton: "Add Entry",
      updateButton: "Update Entry",
      cancelButton: "Cancel",

      allEntriesTitle: "All Entries",
      emptyMessage: "No entries yet.",
      entrySymptomFallback: "(No symptom)",
      editButton: "Edit",
      deleteButton: "Delete",
    },
    fr: {
      title: "Journal des symptômes",
      errorRequired: "Veuillez entrer une date et un symptôme.",

      dateLabel: "Date",
      symptomLabel: "Symptôme",
      symptomPlaceholder: "ex. : maux de tête, fatigue",
      severityLabel: "Gravité",
      severityOptions: ["Léger", "Modéré", "Sévère"],
      notesLabel: "Notes",
      notesPlaceholder: "Notes facultatives...",

      addButton: "Ajouter une entrée",
      updateButton: "Mettre à jour l’entrée",
      cancelButton: "Annuler",

      allEntriesTitle: "Toutes les entrées",
      emptyMessage: "Aucune entrée pour le moment.",
      entrySymptomFallback: "(Aucun symptôme)",
      editButton: "Modifier",
      deleteButton: "Supprimer",
    },
  };

  const t = text[language] || text.en;

  useEffect(() => {
    const saved = localStorage.getItem("journalEntries");
    if (saved) setEntries(JSON.parse(saved));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("journalEntries", JSON.stringify(entries));
    }
  }, [entries, loaded]);

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const clearForm = () => {
    setForm({ date: "", symptom: "", severity: "Mild", notes: "" });
    setEditingId(null);
    setError("");
  };

  const handleSave = () => {
    // In bilingual mode, this message also uses the translation object.
    if (!form.date || !form.symptom) {
      setError(t.errorRequired);
      return;
    }

    const newEntry = { ...form, id: editingId || Date.now() };

    setEntries((prev) =>
      editingId
        ? prev.map((e) => (e.id === editingId ? newEntry : e))
        : [newEntry, ...prev]
    );

    clearForm();
  };

  const handleEdit = (entry) => {
    setEditingId(entry.id);
    setForm(entry);
  };

  const handleDelete = (id) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
    if (editingId === id) clearForm();
  };

  return (
    <div className="page-wrapper">
      <div className="page-container">
        <h2 className="page-title">{t.title}</h2>

        {/* FORM SECTION */}
        <div className="section-block">
          {error && <p className="error">{error}</p>}

          <label>{t.dateLabel}</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={updateField}
            className={form.date ? "date-input has-value" : "date-input"}
          />

          <label>{t.symptomLabel}</label>
          <input
            type="text"
            name="symptom"
            placeholder={t.symptomPlaceholder}
            value={form.symptom}
            onChange={updateField}
            className={form.date ? "date-input has-value" : "date-input"}
          />

          <label>{t.severityLabel}</label>
          <select name="severity" value={form.severity} onChange={updateField}>
            {t.severityOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <label>{t.notesLabel}</label>
          <textarea
            name="notes"
            placeholder={t.notesPlaceholder}
            value={form.notes}
            onChange={updateField}
            rows="5"
          />

          <div className="journal-buttons">
            <button onClick={handleSave}>
              {editingId ? t.updateButton : t.addButton}
            </button>

            {editingId && (
              <button className="cancel" onClick={clearForm}>
                {t.cancelButton}
              </button>
            )}
          </div>
        </div>

        {/* ENTRIES LIST */}
        <div className="section-block">
          <h3 className="section-title">{t.allEntriesTitle}</h3>

          {entries.length === 0 ? (
            <p className="empty">{t.emptyMessage}</p>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="journal-item">
                <strong>{entry.date}</strong> —{" "}
                {entry.symptom || t.entrySymptomFallback} ({entry.severity})
                {entry.notes && <p className="note">{entry.notes}</p>}

                <div className="entry-buttons">
                  <button onClick={() => handleEdit(entry)}>
                    {t.editButton}
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(entry.id)}
                  >
                    {t.deleteButton}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
