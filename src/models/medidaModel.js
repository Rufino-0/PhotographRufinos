var database = require("../database/config");

function buscarUltimasMedidasIniciante(limite_linhas) {

    var instrucaoSql = `select nome, max(score) as highscore from scoreboard
    join usuario on fkUsuario = idUsuario group by nome order by highscore limit ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasExperiente(limite_linhas) {
    
    var instrucaoSql = `select nome, max(score) as highscore from scoreboard
    join usuario on fkUsuario = idUsuario group by nome order by highscore limit ${limite_linhas}`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasExperiente,
    buscarUltimasMedidasIniciante
}
