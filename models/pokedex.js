// const meetings = JSON.parse(
//   fs.readFileSync(__dirname + "/northAmericaMeetings.json", "utf-8")
// );

// async function loadMeetings() {
//   try {
//     await Meeting.insertMany(meetings);
//     console.log("Done!");
//     process.exit();
//   } catch (e) {
//     console.log(e);
//     process.exit();
//   }
// }

const mongoose = require("mongoose");

const pokedexSchema = new mongoose.Schema({
  id: { type: "Number" },
  num: { type: "Number" },
  name: { type: "String" },
  img: { type: "String" },
  type: { type: ["String"] },
  height: { type: "String" },
  weight: { type: "String" },
  candy: { type: "String" },
  candy_count: { type: "Number" },
  egg: { type: "String" },
  spawn_chance: { type: "Number" },
  avg_spawns: { type: "Number" },
  spawn_time: { type: "String" },
  multipliers: { type: ["Number"] },
  weaknesses: { type: ["String"] },
  next_evolution: { type: ["Mixed"] }
});

const Pokedex = mongoose.model("Pokedex", pokedexSchema);

module.exports.Pokedex = Pokedex;
