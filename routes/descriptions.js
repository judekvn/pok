const express = require("express");
const router = express.Router();
const { Description } = require("../models/description");

router.get("/", async (req, res) => {
  const des = await Description.find({});
  res.send(des);
});

router.post("/", async (req, res) => {
  let des = new Description({
    ...req.body
  });

  des = await des.save();
  res.send(des);
});

// router.post("/all", async (req, res) => {
//   const desData = [];
//   for (let desItem in desData) {
//     let des = new Description(desData[desItem]);
//     des = await des.save();
//     console.log(des);
//   }
// });

module.exports = router;
