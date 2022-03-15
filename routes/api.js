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

router.patch("/recipe/:id", async (req, res) => {
  try {
    const post = await Recipe.findOne({ _id: req.params.id });

    if (req.body.name) {
      post.title = req.body.name;
    }

    if (req.body.author) {
      post.author = req.body.author;
    }

    if (req.body.yield) {
      post.yield = req.body.yield;
    }

    if (req.body.time) {
      post.time = req.body.time;
    }

    if (req.body.description) {
      post.description = req.body.description;
    }

    if (req.body.tags) {
      post.tags = req.body.tags;
    }

    if (req.body.rating) {
      post.rating = req.body.rating;
    }

    if (req.body.ratingAverage) {
      post.ratingAverage = req.body.ratingAverage;
    }

    if (req.body.ingredients) {
      post.ingredients = req.body.ingredients;
    }

    if (req.body.steps) {
      post.steps = req.body.steps;
    }

    if (req.body.isEasy) {
      post.isEasy = req.body.isEasy;
    }

    if (req.body.image) {
      post.image = req.body.image;
    }

    await post.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

router.delete("/recipes/:id", (req, res, next) => {
  Recipe.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
