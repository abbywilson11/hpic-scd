// backend/index.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS: allow your frontend origin (we’ll set CORS_ORIGIN on Render)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
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
app.get("/api/brochures/:fileName", (req, res) => {
  const filePath = path.join(__dirname, "brochures", req.params.fileName);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending brochure:", err);
      return res.status(404).json({ message: "Brochure not found" });
    }
  });
});

// Use Render’s PORT or default to 5000 locally
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
