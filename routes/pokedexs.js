const express = require("express");
const router = express.Router();
const { Pokedex } = require("../models/pokedex");

// router.get("/", async (req, res) => {
//   const pokedex = await Pokedex.find({});
//   res.send(pokedex);
// });

router.post("/", async (req, res) => {
  let pokedex = new Pokedex({
    ...req.body
  });

  pokedex = await pokedex.save();
  res.send(pokedex);
});

router.get("/", async (req, res) => {
  const pokedex = await Pokedex.aggregate([
    {
      $match: {
        $and: [{ type: "Fire" }, { weaknesses: "Electric" }]
      }
    }
  ]);

  res.send(pokedex);
});

module.exports = router;
