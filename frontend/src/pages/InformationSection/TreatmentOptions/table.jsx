// import { useState } from "react"
// import "./table.css"
// import React from "react";


// function App() {
//   const [city, setCity] = useState("") 
//   const [hospitals, setHospitals] = useState([]) 
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   const API_KEY = "48880ae7bc084367b7342a79560b95c5"

//   const handleSearch = async () => { //async lets use use await to wait for api responses
//     if (!city) return //if city is empty do nothing
//     console.log(`Searching for city: ${city}`)
//     setLoading(true) //makes the loading sign show up
//     setError("") // clears previous errors before starting the new request
//     setHospitals([]) // clears previous reults

//     try {
// // gets the latitude and longitude of the entered city
//       const geoResponse = await fetch(
//         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(city)}&apiKey=${API_KEY}`
//       )
//       const geoData = await geoResponse.json()
//       // checks in features is empty 
//       if (!geoData.features.length) { //array of locations and tells how many results were found
//         console.log(" City not found")
//         setError("City not found")
//         setLoading(false)
//         return
//       }

//       const { lat, lon } = geoData.features[0].properties // destructures lat an long from first location result
//       console.log(`Found coordinates → lat: ${lat}, lon: ${lon}`)

//       // looks for hospitals in a 5km radius 
//       const placesUrl = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},5000&apiKey=${API_KEY}`

//       const placesResponse = await fetch(placesUrl)
//       const placesData = await placesResponse.json()
      

//       // filters out the irrelevent places
//       const onlyHospitals = placesData.features.filter((f) => {
//         const name = f.properties.name?.toLowerCase() || "" //? checks if it exists || means if name is undefibned use an empty string
//         return (
//           !name.includes("pharmacy") &&
//           !name.includes("veterinary") &&
//           !name.includes("clinic") &&
//           !name.includes("beauty") &&
//           !name.includes("dentist")
//         )
//       })
//       console.log(`Hospitals after filtering: ${onlyHospitals.length}`)
//       setHospitals(onlyHospitals)
//     } catch (err) { // runs if any error occurs in the try block
//       console.error(err)
//       setError("Something went wrong.")
//     } finally { // runs after try or catch
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="table-container">
//       <h1>Find Hospitals</h1>
//       <p>Search for hospitals for treatment in your city</p>

// {/* input box and search button */}
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Enter a city (e.g., Toronto)"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
// {/* displays loading message */}
//       {loading && <p>Searching hospitals in {city}...</p>}
//       {/* displays error message if any */}
//       {error && <p className="error">{error}</p>}

// {/* displays the results in a table */}
//       {!loading && hospitals.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Hospital Name</th>
//               <th>Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {hospitals.map((h, idx) => (
//               <tr key={idx}>
//                 <td>{h.properties.name || "Unnamed Hospital"}</td> 
//                 <td>{h.properties.address_line2 || "Address unavailable"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
// {/* displays message when no results */}
//       {!loading && hospitals.length === 0 && !error && (
//         <p>Enter a city and click search</p>
//       )}
//     </div>
//   )
// }

// export default App

import { useState } from "react"
import "./table.css"
import React from "react"

// We now accept "language" as a prop so this component
// can show all UI text in English ("en") or French ("fr").
function App({ language }) {
  const [city, setCity] = useState("")
  const [hospitals, setHospitals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [hasSearched, setHasSearched] = useState(false) // ✅ new state

  const API_KEY = "48880ae7bc084367b7342a79560b95c5"

  // =================================
  // BILINGUAL TEXT (EN + FR)
  // Centralized here so the logic below
  // stays the same and only text changes.
  // =================================
  const text = {
    en: {
      title: "Find Hospitals",
      subtitle: "Search for hospitals for treatment in your city",
      placeholder: "Enter a city (e.g., Toronto)",
      searchButton: "Search",
      resetButton: "Reset",
      loadingMessage: "Searching hospitals in {city}...",
      errorNoCity: "Please enter a city.",
      errorNotFound: "City not found",
      errorGeneric: "Something went wrong.",
      tableNameHeader: "Hospital Name",
      tableAddressHeader: "Address",
      unnamedHospital: "Unnamed Hospital",
      addressUnavailable: "Address unavailable",
      helperMessage: "Enter a city and click search",
    },
    fr: {
      title: "Trouver un hôpital",
      subtitle: "Recherchez des hôpitaux pour un traitement dans votre ville",
      placeholder: "Entrez une ville (ex. : Toronto)",
      searchButton: "Rechercher",
      resetButton: "Réinitialiser",
      loadingMessage: "Recherche d’hôpitaux à {city}...",
      errorNoCity: "Veuillez entrer une ville.",
      errorNotFound: "Ville introuvable",
      errorGeneric: "Une erreur s’est produite.",
      tableNameHeader: "Nom de l’hôpital",
      tableAddressHeader: "Adresse",
      unnamedHospital: "Hôpital sans nom",
      addressUnavailable: "Adresse non disponible",
      helperMessage: "Entrez une ville et cliquez sur Rechercher",
    },
  }

  const t = text[language] || text.en

  const handleSearch = async () => { //async lets use use await to wait for api responses
    setHasSearched(true) // ✅ user interacted

    if (!city) {
      setError(t.errorNoCity)
      return
    }

    console.log(`Searching for city: ${city}`)
    setLoading(true) //makes the loading sign show up
    setError("") // clears previous errors before starting the new request
    setHospitals([]) // clears previous results

    try {
      // gets the latitude and longitude of the entered city
      const geoResponse = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          city
        )}&apiKey=${API_KEY}`
      )
      const geoData = await geoResponse.json()

      // checks if features is empty
      if (!geoData.features.length) { //array of locations and tells how many results were found
        console.log(" City not found")
        setError(t.errorNotFound)
        setLoading(false)
        return
      }

      const { lat, lon } = geoData.features[0].properties // destructures lat and long from first location result
      console.log(`Found coordinates → lat: ${lat}, lon: ${lon}`)

      // looks for hospitals in a 5km radius
      const placesUrl = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},5000&apiKey=${API_KEY}`

      const placesResponse = await fetch(placesUrl)
      const placesData = await placesResponse.json()

      // filters out the irrelevant places
      const onlyHospitals = placesData.features.filter((f) => {
        const name = f.properties.name?.toLowerCase() || "" //? checks if it exists || means if name is undefibned use an empty string
        return (
          !name.includes("pharmacy") &&
          !name.includes("veterinary") &&
          !name.includes("clinic") &&
          !name.includes("beauty") &&
          !name.includes("dentist")
        )
      })

      console.log(`Hospitals after filtering: ${onlyHospitals.length}`)
      setHospitals(onlyHospitals)
    } catch (err) { // runs if any error occurs in the try block
      console.error(err)
      setError(t.errorGeneric)
    } finally { // runs after try or catch
      setLoading(false)
    }
  }

  const handleReset = () => {
    setCity("")
    setHospitals([])
    setError("")
    setHasSearched(false) // ✅ hides message again
  }

  return (
    <div className="table-container">
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>

      {/* input box and search button */}
      <div className="search-box">
        <input
          type="text"
          placeholder={t.placeholder}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>{t.searchButton}</button>
        <button className="reset-btn" onClick={handleReset}>
          {t.resetButton}
        </button>
      </div>

      {/* displays loading message */}
      {loading && (
        <p>
          {t.loadingMessage.replace("{city}", city)}
        </p>
      )}

      {/* displays error message if any */}
      {error && <p className="error">{error}</p>}

      {/* displays the results in a table */}
      {!loading && hospitals.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>{t.tableNameHeader}</th>
              <th>{t.tableAddressHeader}</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((h, idx) => (
              <tr key={idx}>
                <td>{h.properties.name || t.unnamedHospital}</td>
                <td>{h.properties.address_line2 || t.addressUnavailable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* displays message ONLY after searching */}
      {hasSearched && !loading && hospitals.length === 0 && !error && (
        <p className="helper">{t.helperMessage}</p>
      )}
    </div>
  )
}

export default App
