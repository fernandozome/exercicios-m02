const express = require("express")
const app = express()
const { fltr_carros, listar_carros } = require("./Controladores/listagem carros")
const { verify_senha } = require("./intermediarios")

app.use(verify_senha)
app.get("/carros", listar_carros)
app.get("/carros/:id", fltr_carros)

app.listen(3000)