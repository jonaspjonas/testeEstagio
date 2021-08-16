const express = require("express");
const {consultaPorCNPJ} = require("./controladores/controladorCnpj");

const app = express();
app.use(express.json());

app.get("/cnpj/:cnpj", consultaPorCNPJ );

app.listen(8000, console.log("Servidor ok..."));