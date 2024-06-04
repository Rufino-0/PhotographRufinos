var express = require("express");
var router = express.Router();

var metricaController = require("../controllers/medidaController");

router.get("/ultimasIniciante/", function (req, res) {
    metricaController.buscarUltimasMedidasIniciante(req, res);
});

router.get("/ultimasExperiente/", function (req, res) {
    metricaController.buscarUltimasMedidasExperiente(req, res);
})

module.exports = router;