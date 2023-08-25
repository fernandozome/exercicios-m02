const express = require("express")
const app = express()
const { filtrar_professores, encontar_professor, primeiro_intermediario, segundo_intermediario, intermediario_rota } = require("./Controladores/professores")



app.use(primeiro_intermediario)
app.use(segundo_intermediario)
app.get("/professores", intermediario_rota, filtrar_professores)
app.get("/professores/:id", encontar_professor)

app.listen(3000)