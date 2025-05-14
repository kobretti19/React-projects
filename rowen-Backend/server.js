const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// File paths
const partsPath = path.join(__dirname, "data", "parts.json");
const unitsPath = path.join(__dirname, "data", "units.json");
const profileDeckelPath = path.join(__dirname, "data", "uprofil_deckel.json");

// Helper functions
const readJSON = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf-8"));
const writeJSON = (filePath, data) =>
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

const getProfileDeckel = () => readJSON(profileDeckelPath);
const saveProfileDeckel = (data) => writeJSON(profileDeckelPath, data);

/* ------------------ API ROUTES ------------------ */

// Get all parts
app.get("/api/parts", (req, res) => {
  const parts = readJSON(partsPath);
  res.json(parts);
});

// Update a part by title
app.put("/api/parts/:title", (req, res) => {
  const { title } = req.params;
  const updates = req.body;
  const parts = readJSON(partsPath);
  const index = parts.findIndex((p) => p.title === title);
  if (index === -1) return res.status(404).json({ error: "Part not found" });

  parts[index] = { ...parts[index], ...updates };
  writeJSON(partsPath, parts);
  res.json(parts[index]);
});

// Get all units
app.get("/api/units", (req, res) => {
  const units = readJSON(unitsPath);
  res.json(units);
});

// Create a new unit
app.post("/api/units", (req, res) => {
  const { serial, title } = req.body;
  if (!serial || !title)
    return res.status(400).json({ error: "serial and title required" });

  const parts = readJSON(partsPath);
  const units = readJSON(unitsPath);
  const stock = getProfileDeckel();

  const partIndex = parts.findIndex((p) => p.title === title);
  if (partIndex === -1)
    return res.status(404).json({ error: "Part not found" });

  const part = parts[partIndex];
  const { rückfront, front, print, type } = part;

  if (!type || !stock.uprofil[type] || !stock.deckel[type]) {
    return res
      .status(400)
      .json({ error: "Invalid or missing type (silber/schwarz)" });
  }

  // Check for sufficient materials
  if (
    rückfront < 1 ||
    front < 1 ||
    print < 1 ||
    stock.uprofil[type] < 1 ||
    stock.deckel[type] < 1
  ) {
    return res.status(400).json({ error: "Insufficient materials" });
  }

  // Deduct materials
  parts[partIndex].rückfront -= 1;
  parts[partIndex].front -= 1;
  parts[partIndex].print -= 1;
  writeJSON(partsPath, parts);

  stock.uprofil[type] -= 1;
  stock.deckel[type] -= 1;
  saveProfileDeckel(stock);

  const id = Math.floor(Math.random() * 100000);

  const newUnit = {
    id,
    serial,
    title,
    date: new Date().toISOString(),
  };

  units.push(newUnit);
  writeJSON(unitsPath, units);

  res.status(201).json(newUnit);
});

// Get current stock of uprofil and deckel
app.get("/api/stock", (req, res) => {
  const stock = getProfileDeckel();
  res.json(stock);
});

// Edit uprofil or deckel stock (e.g., /api/stock/uprofil/schwarz)
app.put("/api/stock/:category/:type", (req, res) => {
  const { category, type } = req.params;
  const { amount } = req.body;

  const stock = getProfileDeckel();

  if (!stock[category] || typeof stock[category][type] !== "number") {
    return res.status(404).json({ error: "Invalid category or type" });
  }

  if (typeof amount !== "number") {
    return res.status(400).json({ error: "Amount must be a number" });
  }

  stock[category][type] = amount;
  saveProfileDeckel(stock);

  res.json({ [category]: { [type]: amount } });
});

// Start the server
app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});
