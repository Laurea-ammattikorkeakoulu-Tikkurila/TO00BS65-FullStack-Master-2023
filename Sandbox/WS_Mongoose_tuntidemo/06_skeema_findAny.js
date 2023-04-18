// Otetaan moduuli käyttöön
require("dotenv").config();
var mongoose = require("mongoose");
var date = require("./modules/date");
const Kitten = require("./modules/model");
// Määritellään yhteysosoite
var user = process.env.DB_USER
var salis = process.env.DB_PASS
const uri = process.env.DB_URI;


// Luodaan yhteys

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    //Luodaan uusi  muuttuja, jokna arvo haetaan modules/date.js tiedostosta
    const datee = date.getDate();
    /* Luodaan uusi kitten olio ja tulostetaan sen nimi konsoliin */
    const silence = new Kitten({ name: 'Petteri', date: datee });
    await silence.save();

    /* search for all documents with a name property that begins with "Petteri" and returns the result as an array of kittens*/
    const kitten = await Kitten.find({ name: /^Petteri/ });
    /*     const kissa = JSON.parse(kitten);*/
    console.log(kitten.length);
}