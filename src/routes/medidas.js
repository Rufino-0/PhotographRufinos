var express = require("express");
var router = express.Router();

var metricaController = require("../controllers/medidaController");

// rotas que redirecionam para o controller do seu grafico de acordo com o tipo de grafico


// rota do ranking Iniciante
router.get("/rankingIniciante/", function (req, res) {
    metricaController.rankingIniciante(req, res);
});

// rota do ranking Experiente
router.get("/rankingExperiente/", function (req, res) {
    metricaController.rankingExperiente(req, res);
});

// rota do grafico de porcentagem Iniciante
router.get("/porcentagemInciante/", function (req, res) {
    metricaController.porcentagemInciante(req, res);
});

// rota do grafico de porcentagem Experiente
router.get("/porcentagemExperiente/", function (req, res) {
    metricaController.porcentagemExperiente(req, res);
});

// rota do grafico de tempo Iniciante
router.get("/tempoInciante/", function (req, res) {
    metricaController.tempoInciante(req, res);
});

// rota do grafico de tempo Experiente
router.get("/tempoExperiente/", function (req, res) {
    metricaController.tempoExperiente(req, res);
});


module.exports = router;