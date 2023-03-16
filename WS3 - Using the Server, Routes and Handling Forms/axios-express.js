// Otetaan express-moduuli käyttöön
var express = require("express");
// Otetaan axios-moduuli käyttöön
var axios = require("axios");

var app = express();

app.get("/", function (req, res) {
  // Luodaan AJAX-kysely ja lähetetään pyyntö
  const promise = axios
    .get("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
    // Käsitellään vastaus kun se saapuu
    .then((response) => {
      const data = response.data;

      res.writeHead(200, { "Content-Type": "text/html" });
      for (var i = 0; i < data.Search.length; i++) {
        res.write("<h3>" + data.Search[i].Title + "</h3>");
        res.write("<img src='" + data.Search[i].Poster + "'>");
      }
      res.end(); //HTTP vastaus päättyy
    });
});

// Web-palvelimen luonti Expressin avulla
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
