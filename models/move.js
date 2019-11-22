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

const moveSchema = new mongoose.Schema({
  accuracy: { type: "Number" },
  category: { type: "String" },
  cname: { type: "String" },
  ename: { type: "String" },
  id: { type: "Number" },
  jname: { type: "String" },
  power: { type: "Number" },
  pp: { type: "Number" },
  type: { type: "String" }
});

const Move = mongoose.model("Move", moveSchema);

module.exports.Move = Move;
