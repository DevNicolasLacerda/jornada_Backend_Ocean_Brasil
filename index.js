const express = require("express");
const app = express();

app.get("/" , function (req, res) {
  res.send("Hello worldaaaaa");
});

app.listen(3000);
