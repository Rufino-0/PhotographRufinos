var database = require("../database/config");

function buscarUltimasMedidasIniciante(limite_linhas) {

    var instrucaoSql = `select nome, qndPontos from quizIniciante join usuario on fkUsuario = usuario.id order by qndPontos limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasExperiente(limite_linhas) {
    
    var instrucaoSql = `select nome, qndPontos from quizExperiente join usuario on fkUsuario = usuario.id order by qndPontos limit ${limite_linhas};`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasExperiente,
    buscarUltimasMedidasIniciante
}
