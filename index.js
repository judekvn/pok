const express = require("express");
const mongoose = require("mongoose");
const app = express();
const pokedexs = require("./routes/pokedexs");
const moves = require("./routes/moves");
const descriptions = require("./routes/descriptions");

mongoose
  .connect("mongodb://localhost/pokemon", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected"));

app.use(express.json());
// app.use("/api/products", products);
app.use("/api/pokedexs", pokedexs);
app.use("/api/moves", moves);
app.use("/api/descriptions", descriptions);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`connected port`));
