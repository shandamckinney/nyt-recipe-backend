const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for todo
const Recipe = new Schema({
  name: {
    type: String,
    required: [true, "The name field is required"],
  },
  author: {
    type: String,
    required: [true, "The author field is required"],
  },
  yield: {
    type: Number,
    required: [true, "The yield field is required"],
  },
  time: {
    type: Number,
    required: [true, "The time field is required"],
  },
  description: {
    type: String,
    required: [true, "The description field is required"],
  },
  tags: {
    type: String,
    required: [true, "The tags field is required"],
  },
  rating: {
    type: String,
    required: [true, "The rating field is required"],
  },
  ratingAverage: {
    type: String,
  },
  ingredients: {
    type: String,
    required: [true, "The ingredients field is required"],
  },
  steps: {
    type: String,
    required: [true, "The steps field is required"],
  },
  isEasy: {
    type: Boolean,
  },
  image: {
    type: String,
  },
});

// Create model for todo
const RecipeModel = mongoose.model("recipe", Recipe);

module.exports = RecipeModel;
