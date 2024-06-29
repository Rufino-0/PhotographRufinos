var express = require("express");
var router = express.Router();

var scoreController = require("../controllers/scoreController");

// recebimento de dados vindos dos htmls e passando para o controller

// passando a direção dos dados do quiz iniciante para o controller
router.post("/registrarIniciante", function (req, res) {
    scoreController.registrarIniciante(req, res);
})

// passando a direção dos dados do quiz experiente para o controller
router.post("/registrarExperiente", function (req, res) {
    scoreController.registrarExperiente(req, res);
})

module.exports = router;