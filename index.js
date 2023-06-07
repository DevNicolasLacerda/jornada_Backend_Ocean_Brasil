const express = require("express");
const app = express();

// Indicamos que o Express deve considerar o Body
// das requisições como JSON
app.use(express.json());

app.get("/" , function (req, res) {
  res.send("Hello World");
});

app.get("/oi", function (req, res) {
  res.send("Olá, Mundo!");
});

const herois = ["Mulher maravilha", "Homem de ferro", "Homem Formiga"];

app.get("/herois", function (req, res) {
  res.send(herois.filter(Boolean));
});

app.post("/herois", function (req, res) {
  // console.log(req.body, typeof req.body)

  const nome = req.body.nome;
  //console.log(nome, typeof nome);

  herois.push(nome);

  res.send("Item criado com sucesso!")
});

app.get("/herois/:id", function (req, res) {
  const id = req.params.id;
  
  const item = herois[id - 1];

  res.send(item);
});

app.put("/herois/:id", function (req, res) {
  const id = req.params.id;

  const novoNome = req.body.nome;
  
  herois[id - 1] = novoNome;

  res.send("Item atualizado com sucesso!");
});

app.delete("/herois/:id", function (req, res) {
  const id = req.params.id;

  delete herois[id - 1];

  res.send("Item deletado com sucesso!");
});

app.listen(3000, function () {
  console.log("Servidor rodando em http://localhost:3000")
});