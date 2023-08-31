const { getPackageDescriptionNpm } = require("utils-playground")


const obter_pacote = async (req, res) => {
    const { nomePacote } = req.params
    const dscr_pacote = await getPackageDescriptionNpm(nomePacote)
    return res.send(dscr_pacote)
}

module.exports = obter_pacote