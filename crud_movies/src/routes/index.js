const express = require("express")
const router = express.Router()

router.get("/", (request, response) => {
    response.status(200).json({
        "Titulo": "API - {Reprograma} - Cadastro de Filmes",
        "Version": "1.0.0",
        "Mensagem": "Seja Bem-vindo"    
    })   
})

module.exports = router