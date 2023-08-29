const express = require("express")
const rotas = express()
const instrutores = require("./Controladores/instrutores")



rotas.get("/instrutores", instrutores.listagem)
rotas.get("/instrutores/:id", instrutores.obter_instrutor)
rotas.post("/instrutores", instrutores.cadastrar_instrutor)
rotas.put("/instrutores/:id", instrutores.editar_instrutor)
rotas.patch("/instrutores/:id/status", instrutores.atualizar_instrutor)
rotas.delete("instrutores/:id", instrutores.deletar_instrutor)

module.exports = rotas