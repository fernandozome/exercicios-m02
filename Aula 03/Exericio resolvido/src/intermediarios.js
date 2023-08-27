const verify_senha = (req, res, next) => {

    const { senha } = req.query
    if (!senha) {
        return res.send("A senha não foi informada")
    }

    if (senha !== "carros123") {
        return res.send("A senha não está correta")
    }

    next()
}

module.exports = { verify_senha }