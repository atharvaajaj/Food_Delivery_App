const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  image: String, // URL of image
  category: String
}, {
  timestamps: true
});

module.exports = mongoose.model("FoodItem", foodItemSchema);
