const GenerateSchema = require("generate-schema");
const { Pokedex } = require("./models/pokedex");

//developing schema from json object
const mong = GenerateSchema.mongoose({
  _id: "557a723880a20c9db3bc31c2",
  pkdx_id: 1,
  national_id: 1,
  name: "Bulbasaur",
  __v: 3,
  image_url: "http://pokeapi.co/media/img/1.png",
  description:
    "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.  Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  art_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  types: ["poison", "grass"],
  evolutions: [
    {
      level: 16,
      method: "level_up",
      to: "Ivysaur",
      _id: "557a723880a20c9db3bc31c3"
    }
  ]
});

console.log(mong);

// var laptopData = [...];
// for(var laptopItem in laptopData){
//     new Laptop(laptopData[laptopItem])
//       .save()
//       .catch((err)=>{
//         console.log(err.message);
//       });
// }

const pokeData = [];

async function insertMany() {
  for (let pokeItem in pokeData) {
    let pokemon = new Pokedex(pokeData[pokeItem]);
    pokemon = await pokemon.save();
    console.log(pokemon);
  }
}
// insertMany();

/*
router.get("/all", async (req, res) => {
  const pokeData = [];
  async function insertMany() {
    for (let pokeItem in pokeData) {
      let pokemon = new Pokedex(pokeData[pokeItem]);
      pokemon = await pokemon.save();
      console.log(pokemon);
    }
  }
  insertMany();
});
*/
