const express = require("express")
const rotas = express()
const obter_pacote = require("./Controladores/ctrl-pacote")

rotas.get("/pacote/:nomePacote", obter_pacote)

module.exports = rotas