const carros = require("../banco de dados")

const listar_carros = (req, res) => {

    const { marca, cor } = req.query
    let resultado = carros

    if (marca) {
        resultado = resultado.filter((carro) => { return carro.marca === marca })
    }
    if (cor) {
        resultado = resultado.filter((carro) => { return carro.cor === cor })
    }

    res.send(resultado)
}

const fltr_carros = (req, res) => {
    const { id } = req.params
    const carro_encontrado = carros.find((carro) => {
        return carro.id === Number(id)
    })
    res.send(carro_encontrado)
}

module.exports = { fltr_carros, listar_carros }