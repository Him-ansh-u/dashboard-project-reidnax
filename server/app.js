import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

import { verifyToken } from "./Auth/auth.js";
import { login, register } from "./controllers/auth.js";
import Data from "./models/Data.js";
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017/";
app.use(cors());
app.use(express.json());
mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));

app.post("/login", login);
app.post("/register", register);
app.get("/api/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

app.post("/api/data", verifyToken, async (req, res) => {
  const salesData = new Data({
    month: req.body.month,
    website: req.body.website,
    tools: req.body.tools,
    bugFixes: req.body.bugFixes,
  });
  try {
    const newData = await salesData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
  const data = await Data.find();
});
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
