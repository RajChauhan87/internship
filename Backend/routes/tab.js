const express = require("express");
const router = express.Router();
const Employee = require("../models/table");
const Table = require("../models/table");

router.post("/table", async (req, res) => {
  try {
    const data = new Table(req.body);
    const saved = await data.save();
    if (saved) {
      res.status(201).json({ message: "data submited successfully" });
    } else {
      res.status(400).json({ error: "data not submit" });
    }
  } catch (error) {
    res.status(500).json({ error: "server error occurs" });
  }
});

router.get("/table", async (req, res) => {
  try {
    const data = await Table.find();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ error: "server error occur" });
  }
});

router.get("/table/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Table.findById(id);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ error: "server error occur" });
  }
});

router.delete("/table/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Table.findByIdAndDelete(id);
    if (data) {
      res.status(201).json({ message: "data deleted successfully" });
    } else {
      res.status(400).json({ error: "data not deleted" });
    }
  } catch (error) {
    res.status(500).json({ error: "server error occur" });
  }
});

router.patch("/table/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Table.findByIdAndUpdate(id, req.body);
    if (data) {
      res.status(201).json({ message: "data update successfully" });
    } else {
      res.status(400).json({ error: "data not updated" });
    }
  } catch (error) {
    res.status(500).json({ error: "server error occur" });
  }
});
module.exports = router;
