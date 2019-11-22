const mongoose = require("mongoose");

const desSchema = new mongoose.Schema({
  _id: { type: "ObjectId" },
  pkdx_id: { type: "Number" },
  national_id: { type: "Number" },
  name: { type: "String" },
  __v: { type: "Number" },
  image_url: { type: "String" },
  description: { type: "String" },
  art_url: { type: "String" },
  types: { type: ["String"] },
  evolutions: { type: ["Mixed"] }
});

const Description = mongoose.model("Description", desSchema);

module.exports.Description = Description;
