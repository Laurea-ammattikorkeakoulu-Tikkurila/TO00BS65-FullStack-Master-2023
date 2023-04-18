// Otetaan moduuli käyttöön
require("dotenv").config();
var mongoose = require("mongoose");
const Kitten = require("./modules/model");
// Määritellään yhteysosoite
var user = process.env.DB_USER
var salis = process.env.DB_PASS
const uri = process.env.DB_URI;

// Luodaan yhteys
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const kittens = await Kitten.find();
    console.log(kittens);
}