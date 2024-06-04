var express = require("express");
var router = express.Router();

var scoreController = require("../controllers/scoreController");

//Recebendo os dados do html e direcionando para a função aplicar de scoreController.js
router.post("/aplicarI", function (req, res) {
    scoreController.aplicarI(req, res);
})
router.post("/aplicarE", function (req, res) {
    scoreController.aplicarE(req, res);
})

module.exports = router;