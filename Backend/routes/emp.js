const express = require("express");
const router = express.Router();
const Employee=require("../models/employee");


router.post("/employee", async (req, res) => {
  try {
    const data = new Employee(req.body);
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

router.get("/employee", async (req, res) => {
    try {
      const data = await Employee.find();
      res.status(201).send(data);
    } catch (error) {
      res.status(500).json({ error: "server error occurs" });
    }
  });

  router.delete("/employee/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Employee.findByIdAndDelete(id);
      if (data) {
        res.status(201).send(data);
      } else {
        res.status(400).json({ error: "error occur" });
      }
    } catch (error) {
      res.status(500).json({ error: "server error" });
    }
  });

  router.patch("/employee/:id", async(req,res) =>{
    try{
      const id = req.params.id;
      const data = await Employee.findByIdAndUpdate(id, req.body);
      if(data){
        res.status(201).json({message:"data updated successfully"})
      }else{
        res.status(400).json({error:"error occur"})
      }
    }catch(error){
      res.status(500).json({error:"server error occur"})
    }
  })
  

module.exports = router;
