const express = require("express");
const router = express.Router();
const Cont = require("../models/contact");
const User = require("../models/user");


router.post("/contact", async (req, res) => {
  try {
    const data = new Cont(req.body);
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


router.post("/user", async (req, res) => {
  try {
    const data = new User(req.body);
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


router.get("/contact", async (req, res) => {
  try {
    const data = await Cont.find();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ error: "server error occurs" });
  }
});


router.get("/contact/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Cont.findById(id);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ error: "server error occurs" });
  }
});


router.delete("/contact/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Cont.findByIdAndDelete(id);
    if (data) {
      res.status(201).send(data);
    } else {
      res.status(400).json({ error: "error occur" });
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});


router.patch("/contact/:id", async(req,res) =>{
  try{
    const id = req.params.id;
    const data = await Cont.findByIdAndUpdate(id, req.body);
    if(data){
      res.status(201).json({message:"data updated successfully"})
    }else{
      res.status(400).json({error:"error occur"})
    }
  }catch(error){
    res.status(500).json({error:"server error occur"})
  }
})


router.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findById(id);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ error: "server error occurs" });
  }
});


router.get("/user", async (req, res) => {
  try {
    const data = await User.find();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ error: "server error occur" });
  }
});


router.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    if (data) {
      res.status(200).json({message:"data deleted Successfully"});
    } else {
      res.status(400).json({ error: "error occur" });
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});


router.patch("/user/:id", async(req,res) =>{
  try{
    const id = req.params.id;
    const data = await User.findByIdAndUpdate(id, req.body);
    if (data){
      res.status(201).json({message:"data Upadate Successfully"});
    
    }else{
      res.status(400).json({error:"error occur"})
    }

  }catch(error){
    res.status(500).json({error:"server error occur"})

  }
});


module.exports = router;
