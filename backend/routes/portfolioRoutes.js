import express from "express";
import Portfolio from "../models/Portfolio.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const p = new Portfolio(req.body);
    await p.save();
    res.status(201).json(p);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Create failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const { skill, role } = req.query;
    const filter = {};
    if (skill) filter.skills = skill;
    if (role) filter["hero.title"] = role;
    const list = await Portfolio.find(filter).sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const p = await Portfolio.findById(req.params.id);
    if (!p) return res.status(404).json({ error: "Not found" });
    res.json(p);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

export default router;
