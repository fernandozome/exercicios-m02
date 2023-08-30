let { identificador_aula, instrutores, aulas } = require("../banco de dados")

const cadastrar_aula = (req, res) => {
    const { idInstrutor } = req.params
    const { titulo, descricao } = req.body

    const instrutor_valido = instrutores.find((instrutor) => {
        return instrutor.id === parseInt(idInstrutor)
    })

    if (!instrutor_valido) {
        return res.status(404).json({ mensagem: "Instrutor não existe" })
    }
    const aula = {
        id: identificador_aula++,
        instrutor_id: parseInt(idInstrutor),
        titulo,
        descricao
    }
    aulas.push(aula)

    return res.status(201).json({ aula })
}


const listar_aulas = (req, res) => {
    return res.send.json({ aulas })
}


const obter_aula = (req, res) => {
    const { id } = req.params
    const aula = aulas.find((aula) => { return aula.id === parseInt(id) })

    if (!aula) {
        return res.status(404).json({ mensagem: "Aula não existe" })
    }

    return res.send(aula)
}


const obter_aula_instrutor = (req, res) => {
    const { idInstrutor } = req.params
    const instrutor_valido = instrutores.find((instrutor) => {
        return instrutor.id === parseInt(idInstrutor)
    })

    if (!instrutor_valido) {
        return res.status(404).json({ mensagem: "Instrutor não existe" })
    }

    const aulas_encontradas = aulas.filter((aula) => { return aula.instrutor_id === instrutor_valido.id })

    return res.send(aulas_encontradas)
}


module.exports = { cadastrar_aula, listar_aulas, obter_aula, obter_aula_instrutor }