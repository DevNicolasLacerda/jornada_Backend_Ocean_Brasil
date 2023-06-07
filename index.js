const express = require("express");
const app = express();

app.get("/" , function (req, res) {
  res.send("Hello worldaaaaa");
});

app.get("/oi", function (req, res) {
  res.send("Ola, Mundo!!");
});

const herois = ["Mulher maravilha", "Homem de ferro", "Homem Formiga"];

app.get("/herois", function (req, res) {
  res.send(herois);
});

app.listen(3000, function () {
  console.log("Servidor rodando em http://localhost:3000")
});