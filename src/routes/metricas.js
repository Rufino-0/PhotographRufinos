var express = require("express");
var router = express.Router();

var metricaController = require("../controllers/MetricasController");

router.get("/ultimasIniciantes/", function (req, res) {
    metricaController.buscarUltimasMedidasIniciante(req, res);
});

router.get("/ultimasExperiente/", function (req, res) {
    metricaController.buscarUltimasMedidasIniciante(req, res);
})

module.exports = router;