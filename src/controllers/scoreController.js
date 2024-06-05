var scoreModel = require("../models/scoreModel");

function aplicarI(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo jogo.html
    var acerto = req.body.acertoServer;
    var idUsuario = req.body.usuarioServer;
    var erro = req.body.erroServer;
    var ponto = req.body.pontoServer;


    // Faça as validações dos valores
    if (acerto == undefined) {
        res.status(400).send("Seu score está undefined!");

    } else if (erro == undefined) {
        res.status(400).send("Seu erro está undefined!");

    } else if (ponto == undefined) {
        res.status(400).send("Seu ponto está undefined!");

    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    }
    
        
    // Passe os valores como parâmetro e vá para o arquivo scoreModel.js
    scoreModel.aplicarI(acerto, erro, ponto, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao inserir os dados experientes Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function aplicarE(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo jogo.html
    var acerto = req.body.acertoServer;
    var idUsuario = req.body.usuarioServer;
    var erro = req.body.erroServer;
    var ponto = req.body.pontoServer;


    // Faça as validações dos valores
    if (acerto == undefined) {
        res.status(400).send("Seu score está undefined!");

    } else if (erro == undefined) {
        res.status(400).send("Seu erro está undefined!");

    } else if (ponto == undefined) {
        res.status(400).send("Seu ponto está undefined!");

    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    }
    
        
    // Passe os valores como parâmetro e vá para o arquivo scoreModel.js
    scoreModel.aplicarE(acerto, erro, ponto, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao inserir os dados experientes Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    aplicarI,
    aplicarE
}