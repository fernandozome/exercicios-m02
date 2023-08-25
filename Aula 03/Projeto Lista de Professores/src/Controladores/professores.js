const professores = require("../banco de dados")

const filtrar_professores = (req, res) => {
    const { stack } = req.query
    let resultado = professores
    if (stack) {
        resultado = professores.filter((professor) => { return professor.stack === stack })
    }
    res.send(resultado)
}

const encontar_professor = (req, res) => {
    const prof_encontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id)
    })

    res.send(prof_encontrado)
}

const primeiro_intermediario = (req, res, next) => {
    console.log("Passei no primeiro Intermediário")
    next();
}

const segundo_intermediario = (req, res, next) => {
    console.log("Passei no segundo Intermediário")
    next();
}

const intermediario_rota = (req, res, next) => {
    console.log("Passei Intermediário da rota")
    next();
}

module.exports = {
    filtrar_professores,
    encontar_professor,
    primeiro_intermediario,
    segundo_intermediario,
    intermediario_rota
}