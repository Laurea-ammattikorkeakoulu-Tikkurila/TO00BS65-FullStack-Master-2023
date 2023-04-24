// Otetaan express-moduuli käyttöön
var express = require("express");
var app = express();

// haetaan ympäristömuuttujat .env tiedostosta
require("dotenv").config();

// Otetaan mongoose moduuli käyttöön
var mongoose = require("mongoose");

// Haetaan mongoose_schema model käyttöön
const Movie = require("./modules/model");

//haetaan ympäristömuutjista tietokanta linkki
var uri = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

// Tämä tarvitaan lomakedatan lukemista varten
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


const client = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Luodaan reitit ja niiden toiminnallisuudet

/* Tulostetaan kaikki leffat */
app.get("/api/leffat", function (req, res) {

    async function connect() {
        try {
            const leffat = await Movie.find({}).limit(10);
            console.log("Leffat haettu...");
            res.status(200).json(leffat);
        } catch (error) {
            res.status(500).json("Yhteysvirhe")
            console.error(`Connection error: ${error.stack} on Worker process: ${process.pid}`)
        } finally {
            console.log("Job done...");
        }
    }
    connect();
});

/* Haetaan leffa _id perusteella */
app.get("/api/hae/:id", function (req, res) {
    var _id = req.params.id;
    res.send("Haetaan leffa idn (_id) perusteella")
});

// Haetaan leffat - nimen (osan) perusteella

app.get("/api/name/:text", (req, res) => {
    var nimi = req.params.text;

    res.send("Haetaan leffa nimen (title) perusteella")

});


// Lisätään yksi leffa - huomaa POST-muuttujien lukeminen
app.post("/api/lisaa", function (req, res) {
    res.send("Lisätään leffa: " + req.body.title + " (" + req.body.year + ")");

});

// Muokataan leffan tietoja id-numeron perusteella. Huomaa ID-arvon lukeminen
app.put("/api/muokkaa/:id", function (req, res) {
    res.send("Muokataan leffaa id:llä: " + req.params.id);
});

// Poistetaan leffa id:n perusteella. Huomaa ID-arvon lukeminen 
app.delete("/api/poista/:id", function (req, res) {
    res.send("Poistetaan leffa id:llä: " + req.params.id);
});

// Web-palvelimen luonti Expressin avulla
app.listen(8081, function () {
    console.log("Kuunnellaan porttia..." + PORT);
});
