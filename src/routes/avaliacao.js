var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de avaliacaoController - inserido 02/08/24

router.post("/avaliar", function (req, res) {
    avaliacaoController.avaliarusuario(req, res);
})

// mandando dados para atualizar o sessionStorage - inserido 02/08/24

router.post("/atualizar", function (req, res) {
    avaliacaoController.atualizar(req, res);
})

// pegando os dados do banco de dados e mandando para o js - inserido 02/08/24

router.get("/puxarResposta", function (req, res) {
    avaliacaoController.puxarResposta(req, res);
});

module.exports = router;