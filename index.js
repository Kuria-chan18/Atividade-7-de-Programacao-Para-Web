const express = require("express");
const app = express();

let incrementar1 = 0;
let incrementar5 = 0;
let contador = 0;

app.get("/incrementar1", function (req, res) {
    ++contador;
    ++incrementar1;
    res.send({ contador });
  });

  app.get("/incrementar5", function (req, res) {
    contador+=5;
    ++incrementar5;
    res.send({ contador });
  });
  
  app.get("/relatorio", function (req, res) {
    res.send({ contador, incrementar1, incrementar5 });
  });

app.get("/contador", function (req, res) {
  res.send({ contador });
});

app.listen(3000);
