var scoreModel = require("../models/scoreModel");

// funções para registrar os dados do quiz iniciante e experiente no banco de dados

function registrarIniciante(req, res) {
    
    // dados importados do quiz iniciante e com novos nomes 

    var usuario = req.body.idUsuario;
    var pontos = req.body.pontos;
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var tempo = req.body.tempo;

    // validações pra cada uma das novas variaveis conferirindo se elas não estão indefinidas

    if (usuario == undefined) {
        res.status(400).send("O usuario está undefined!");

    } else if (pontos == undefined) {
        res.status(400).send("Seus pontos estão undefined!");

    } else if (acertos == undefined) {
        res.status(400).send("Seus acertos estão undefined!");

    } else if (erros == undefined) {
        res.status(400).send("Seus erros estão undefined!");

    }else if (tempo == undefined) {
        res.status(400).send("Seu tempo está undefined!");
    }

    // dados sendo mandados para o model, em ordem de insrção para o banco de dados 

    scoreModel.registrarIniciante(usuario, pontos, acertos, erros, tempo)
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



function registrarExperiente(req, res) {

    // dados importados do quiz experiente e com novos nomes 
    
    var usuario = req.body.idUsuario;
    var pontos = req.body.pontos;
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var tempo = req.body.tempo;


    // validações pra cada uma das novas variaveis conferirindo se elas não estão indefinidas

    if (usuario == undefined) {
        res.status(400).send("O usuario está undefined!");

    } else if (pontos == undefined) {
        res.status(400).send("Seus pontos estão undefined!");

    } else if (acertos == undefined) {
        res.status(400).send("Seus acertos estão undefined!");

    } else if (erros == undefined) {
        res.status(400).send("Seus erros estão undefined!");

    }else if (tempo == undefined) {
        res.status(400).send("Seu tempo está undefined!");
    }

    // dados sendo mandados para o model, em ordem de insrção para o banco de dados 
   
    scoreModel.registrarExperiente(usuario, pontos, acertos, erros, tempo)
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

// pegando as funções para exportar para o model 

module.exports = {
    registrarIniciante,
    registrarExperiente
}
