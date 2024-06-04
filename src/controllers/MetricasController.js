var MetricasModel = require("../models/MetricasModel");

function buscarUltimasMedidasIniciante(req, res) {

    const limite_linhas = 7;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    MetricasModel.buscarUltimasMedidasIniciante(limite_linhas).then(function (resultado) {
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

function buscarUltimasMedidasExperiente(req, res) {

    const limite_linhas = 7;
    const idUsuarioServer = req.query.idUsuarioServer

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    MetricasModel.buscarUltimasMedidasExperiente(idUsuarioServer, limite_linhas).then(function (resultado) {
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

function buscarUltimasGlobalIniciante(req, res) {

    const limite_linhas = 7;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    MetricasModel.buscarUltimasGlobalIniciante(limite_linhas).then(function (resultado) {
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

function buscarUltimasGlobalExperiente(req, res) {

    const limite_linhas = 7;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    MetricasModel.buscarUltimasGlobalIniciante(limite_linhas).then(function (resultado) {
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

module.exports = {
    buscarUltimasMedidasExperiente,
    buscarUltimasMedidasIniciante,
    buscarUltimasGlobalIniciante,
    buscarUltimasGlobalExperiente
}