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

    /* Luodaan uusi kitten olio ja tulostetaan sen nimi konsoliin ja tallennetaan tietokantaan*/
    const silence = new Kitten({ name: 'Sanna' });
    console.log(silence.name); // 'Silence'
    await silence.save();
    /* Luodaan kaksi uutta kitten oliota ja toinen tallennetaan tietokantaan ja toinen kutsuu methodia*/
    const fluffy = new Kitten({ name: 'Sauli' });
    const turbo = new Kitten();
    fluffy.speak(); // "Meow name is Fluffy"
    await fluffy.save();
}
