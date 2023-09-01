const produtos = require("../banco de dados_produtos")
const fs = require("fs/promises")
const listaDeProdutos = async (req, res) => {
    return res.json(produtos)
}

const ctrlVendas = async (req, res) => {
    const { produtoId, quantidade } = req.body
    const produtoEncontrado = produtos.find((item) => { return item.id === Number(produtoId) })

    if (!produtoEncontrado) { return res.status(404).json("Produto não encontrado") }

    try {
        const vendas = await fs.readFile("./src/vendas.json")
        const vendasObj = JSON.parse(vendas)

        vendasObj.vendas.push({
            produto: produtoEncontrado,
            quantidade
        })

        await fs.writeFile("./src/vendas.json", JSON.stringify(vendasObj))
        return res.status(201).json({ mensagem: "Venda registrada!" })

    } catch (erro) {
        res.status(500).json({ mensagem: "Deu erro!" })
    }
}

module.exports = {
    listaDeProdutos,
    ctrlVendas
}