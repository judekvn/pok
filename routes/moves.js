const express = require("express");
const router = express.Router();
const { Move } = require("../models/move");

router.get("/", async (req, res) => {
  const move = await Move.find({});
  res.send(move);
});

router.post("/", async (req, res) => {
  let move = new Move({
    ...req.body
  });

  move = await move.save();
  res.send(move);
});

// router.post("/all", async (req, res) => {
//   const moveData = [];
//   for (let moveItem in moveData) {
//     let move = new Move(moveData[moveItem]);
//     move = await move.save();
//     console.log(move)
//   }

// });

module.exports = router;
