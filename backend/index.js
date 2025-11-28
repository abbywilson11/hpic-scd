// backend/index.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS: allow your frontend origin (we’ll set CORS_ORIGIN on Render)
app.use(
  cors({
    origin: [
      process.env.CORS_ORIGIN,          // your Render frontend
      "http://localhost:5173",          // local vite dev
      "http://localhost:3000",          // alt local dev
      "http://127.0.0.1:5173",
      "http://127.0.0.1:3000"
    ].filter(Boolean),
  })
);


app.use(express.json());

// Simple health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

// Example hospitals route
app.get("/api/hospitals", (req, res) => {
  res.json({ message: "List of hospitals goes here" });
});
// Serve brochures from /backend/brochures
app.use(
  "/api/brochures",
  express.static(path.join(__dirname, "brochures"))
);
console.log("DEBUG __dirname:", __dirname);
console.log("DEBUG process.cwd():", process.cwd());
console.log(
  "DEBUG brochure folder exists:",
  fs.existsSync(path.join(__dirname, "brochures"))
);
console.log("DEBUG brochure folder path:", 
  path.join(__dirname, "brochures")
);

// Use Render’s PORT or default to 5000 locally
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
