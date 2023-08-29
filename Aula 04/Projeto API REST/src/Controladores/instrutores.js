let { instrutores, identificador_instrutor } = require("../banco de dados")

const listagem = (req, res) => {
    return res.json(instrutores)
}

const obter_instrutor = (req, res) => {
    const { id } = req.params
    const instrutor_encontrado = instrutores.find((instrutor) => { return instrutor.id === Number(id) })

    if (!instrutor_encontrado) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }

    return res.status(200).json({ instrutor_encontrado })
}

const cadastrar_instrutor = (req, res) => {
    const { nome, email, status } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: "Nome não preenchido" })
    }
    if (!email) {
        return res.status(400).json({ mensagem: "Email não preenchido" })
    }

    const instrutor = {
        id: identificador_instrutor++,
        nome,
        email,
        status: status ?? true
    }
    instrutores.push(instrutor)
    return res.status(201).json({ instrutor })
}

const editar_instrutor = (req, res) => {
    const { id } = req.params
    const { nome, email, status } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: "Nome não preenchido" })
    }
    if (!email) {
        return res.status(400).json({ mensagem: "Email não preenchido" })
    }
    if (!status) {
        return res.status(400).json({ mensagem: "Status não preenchido" })
    }

    const instrutor_encontrado = instrutores.find((instrutor) => { return instrutor.id === Number(id) })

    if (!instrutor_encontrado) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }

    instrutor_encontrado.nome = nome
    instrutor_encontrado.email = email
    instrutor_encontrado.status = status

    return res.status(204).send()

}

const atualizar_instrutor = (req, res) => {
    const { id } = req.params
    const { status } = req.body
    const instrutor_encontrado = instrutores.find((instrutor) => { return instrutor.id === Number(id) })

    if (!instrutor_encontrado) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }

    instrutor_encontrado.status = status

    return res.status(204).send()


}

const deletar_instrutor = (req, res) => {
    const { id } = req.params
    const instrutor_encontrado = instrutores.find((instrutor) => { return instrutor.id === Number(id) })

    if (!instrutor_encontrado) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }

    instrutores = instrutores.filter((instrutor) => { instrutor.id !== Number(id) })
    return res.status(204).send()
}

module.exports = {
    listagem,
    obter_instrutor,
    cadastrar_instrutor,
    editar_instrutor,
    atualizar_instrutor,
    deletar_instrutor
}