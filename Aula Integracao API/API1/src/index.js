const express = require('express')
const app = express()
const axios = require('axios')

const instAxios = axios.create(
    {
        baseURL: 'http://localhost:3001/carros'
    }
)
app.use(express.json())

app.get('/', async (req, res) => {

    const novoCarro = {
        modelo: "Fusca",
        marca: "Volkswagen"
    }

    const resultadoAxios = await instAxios.post('/carros', novoCarro)

    res.json(resultadoAxios.data)
})



app.listen(3000)