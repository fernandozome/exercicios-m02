const banco_de_dados = {
    identificador_instrutor: 3,
    identificador_aula: 2,

    instrutores: [
        {
            id: 1,
            nome: "Guido",
            email: "guido@email.com",
            status: true
        },
        {
            id: 2,
            nome: "Dani",
            email: "dani@email.com",
            status: true
        }
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: "Arrays",
            descrição: "Aula sobre Arrays",
        }
    ]
}

module.exports = banco_de_dados