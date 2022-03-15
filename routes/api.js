const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");

router.get("/recipes", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Recipe.find()
    .then((data) => res.json(data))
    .catch(next);
});

router.get("/recipe/:id", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Recipe.findOne()
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/recipes", (req, res, next) => {
  if (req.body) {
    Recipe.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.post("/recipe/edit/:id", async (req, res) => {
  try {
    let updates = req.body;
    Recipe.findByIdAndUpdate(req.body.id);
    const post = await Recipe.findOne({ _id: req.params.id }, updates, {
      new: true,
    })
      .then((prevState) => res.json(prevState))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/recipes/:id", (req, res, next) => {
  Recipe.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
