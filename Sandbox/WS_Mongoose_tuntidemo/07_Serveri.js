var express = require("express");
var app = express();
const port = process.env.PORT || 3002;
const haku = require("./modules/haku");

// otetaan EJS käyttöön
app.set("view engine", "ejs");

// Tällä pakotetaan sivupohja tuottamaan sisennettyä, kaunista HTML:ää. 
// Tuotantokäytössä asetus voi olla false jolloin sivujen koko pienenee hieman
app.locals.pretty = true;

var etusivu = {
    heading: "Kaikkeen sitä joutuukin...",
    content: "Sisältö"
}
app.get("/", function (req, res) {
    res.render("pages/index", etusivu);
});

app.get("/katit", function (req, res) {
    const katit = haku.getKatit();
    console.log("Katin pirulaiset serverissä  " + katit);
    // välitetään muuttuja sivupohjalle nimeltä "katit.ejs"
    res.render("pages/katit", { kattila: katit });
});

// Määritellään tervehdysmuuttuja
var tervehdys = { teksti: "Sivupohjien käyttö on helppoa!!!" };
app.get("/tervehdys", function (req, res) {
    // välitetään muuttuja sivupohjalle nimeltä "terve.ejs"
    res.render("pages/terve", tervehdys);
});

// Määritellään ostokset JSON olio
var ostokset = {
    otsikko: "Ostoslista",
    taulu: ["banaania", "omenaa", "päärynää", "kesäkurpitsaa"]
};

app.get("/ostokset", function (req, res) {
    res.render("pages/ostokset", ostokset);
});

// Määritellään muuttuja joka on muotoa vektori ja joka koostuu JSON oliosta
var moredata = [
    { name: "John", age: 25 },
    { name: "Mike", age: 42 },
    { name: "Samantha", age: 51 }
];
app.get("/users", function (req, res) {
    res.render("pages/users", { users: moredata });
});

// Web-palvelimen luonti Expressin avulla
app.listen(port, function () {
    console.log("Example app listening on port: " + port);
});

