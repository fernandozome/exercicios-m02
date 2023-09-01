const express = require("express")
const { listaDeProdutos, ctrlVendas } = require("./Ctrl/Ctrl_vendas")
const app = express()

app.use(express.json())

app.get("/produtos", listaDeProdutos)
app.post("/produtos", ctrlVendas)
app.listen(3000)