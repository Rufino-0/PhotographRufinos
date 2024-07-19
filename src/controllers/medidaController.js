var medidaModel = require("../models/medidaModel");


// script de pesquisa de dados do grafico de porcentagem iniciante
function porcentagemInciante(req, res) {

    // limite de dados que vai ser jogado no script sql
    const limite_linhas = 1;
    // importando o id do usuario para usar no script sql
    const idUsuario = req.query.idUsuario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    console.log(`idUsuario: ${idUsuario}`);
    
    // chamando o metodo do model para buscar os dados dosql
    medidaModel.porcentagemInciante(idUsuario, limite_linhas).then(function (resultado) {
       if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

    console.log("SEM RESULTADO");
}

// script de pesquisa de dados do grafico de porcentagem experiente
function porcentagemExperiente(req, res) {

    // limite de dados que vai ser jogado no script sql
    const limite_linhas = 1;
    // importando o id do usuario para usar no script sql
    const idUsuario = req.query.idUsuario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    console.log(`idUsuario: ${idUsuario}`);
    
    medidaModel.porcentagemExperiente(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// script de pesquisa de dados do grafico de tempo iniciante
function tempoInciante(req, res) {

    // limite de dados que vai ser jogado no script sql
    const limite_linhas = 7;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    
    medidaModel.tempoInciante(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// script de pesquisa de dados do grafico de tempo experiente
function tempoExperiente(req, res) {

    // limite de dados que vai ser jogado no script sql
    const limite_linhas = 7;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    
    medidaModel.tempoExperiente(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// script de pesquisa de dados do ranking iniciante
function rankingIniciante(req, res) {

    // limite de dados que vai ser jogado no script sql
    const limite_linhas = 10;

    console.log(`Recuperando as ultimas ${limite_linhas} posições`);

    
    medidaModel.rankingIniciante(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas posições.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// script de pesquisa de dados do ranking experiente
function rankingExperiente(req, res) {

    // limite de dados que vai ser jogado no script sql
    const limite_linhas = 10;

    console.log(`Recuperando as ultimas ${limite_linhas} posições`);

    
    medidaModel.rankingExperiente(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas posições.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// exportando as funções para os códigos do HTML

module.exports = {
    porcentagemExperiente,
    porcentagemInciante,
    tempoInciante,
    tempoExperiente,
    rankingIniciante,
    rankingExperiente

}