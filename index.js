const express = require("express");
const app = express();

app.get("/" , function (req, res) {
  res.send("Hello worldaaaaa");
});

app.get("/oi", function (req, res) {
  res.send("Ola, Mundo");
});

app.listen(3000, function () {
  console.log("Servidor rodando em http://localhost:3000")
});