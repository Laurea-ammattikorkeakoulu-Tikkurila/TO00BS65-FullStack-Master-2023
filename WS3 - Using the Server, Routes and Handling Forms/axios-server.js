// Otetaan axios-moduuli käyttöön
var axios = require("axios");
var http = require("http");
const port = process.env.PORT || 3001;

//create a server object:
http
  .createServer(function (request, res) {
    if (request.url === "/") {
      // Luodaan AJAX-kysely ja lähetetään pyyntö
      const promise = axios
        .get("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        // Käsitellään vastaus kun se saapuu
        .then((response) => {
          const data = response.data;

          // Valitaan Content-type tarjoiltavan sisällön suhteen
          res.writeHead(200, { "Content-Type": "text/html" });
          for (var i = 0; i < data.Search.length; i++) {
            res.write("<h3>" + data.Search[i].Title + "</h3>");
            res.write("<img src='" + data.Search[i].Poster + "'>");
          }
          res.end(); //HTTP vastaus päättyy
        });
    }
  })
  .listen(port); // palvelin kuuntelee joko pilvipalvelun porttia tai paikallista porttia nro 3000
