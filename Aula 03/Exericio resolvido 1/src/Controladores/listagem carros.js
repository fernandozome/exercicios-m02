const carros = require("../banco de dados")

const fltr_carros = (req, res) => {

    const { marca, cor } = req.query
    let resultado = carros

    if (marca) {
        resultado = carros.filter((carro) => { return carro.marca === marca })
        res.send(resultado)
    } else if (cor) {
        resultado = carros.filter((carro) => { return carro.cor === cor })
        res.send(resultado)
    }

    res.send(resultado)
}

const listar_carros = (req, res) => {
    const carro_encontrado = carros.find((carro) => {
        return carro.id === Number(req.params.id)
    })
    res.send(carro_encontrado)
}

module.exports = { fltr_carros, listar_carros }