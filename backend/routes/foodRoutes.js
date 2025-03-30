const express = require("express");
const router = express.Router();
const FoodItem = require("../models/FoodItem");

router.post("/", async (req, res) => {
  const { name, description, price, image, category } = req.body;
  const food = new FoodItem({ name, description, price, image, category });

  try {
    const newFood = await food.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
