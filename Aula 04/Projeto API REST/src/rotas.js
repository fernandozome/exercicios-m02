const express = require("express")
const rotas = express()
const instrutores = require("./Controladores/instrutores")
const aulas = require("./Controladores/aulas")



rotas.get("/instrutores", instrutores.listagem)
rotas.get("/instrutores/:id", instrutores.obter_instrutor)
rotas.post("/instrutores", instrutores.cadastrar_instrutor)
rotas.put("/instrutores/:id", instrutores.editar_instrutor)
rotas.patch("/instrutores/:id/status", instrutores.atualizar_instrutor)
rotas.delete("instrutores/:id", instrutores.deletar_instrutor)

rotas.post("/instrutores/:idInstrutor/aulas", aulas.cadastrar_aula)
rotas.get("/aulas", aulas.listar_aulas)
rotas.get("/aulas/:id", aulas.obter_aula)
rotas.get("/instrutores/:idInstrutor/aulas", aulas.obter_aula_instrutor)

module.exports = rotas