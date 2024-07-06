var database = require("../database/config");

// instruções vinda do crontroller para executar no banco de dados

// script de dados do grafico de porcentagem iniciante 
function porcentagemInciante(limite_linhas, idUsuario) {

    // Instrução que vai ser inserida no sql
    var instrucaoSql = `select acertos as AcertosQuiz, erros as ErrosQuiz from quiziniciante 
    join usuario on fkUsuario = ${idUsuario} order by quiziniciante.id limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// script de dados do grafico de porcentagem experiente
function porcentagemExperiente(limite_linhas, idUsuario) {

    // Instrução que vai ser inserida no sql
    var instrucaoSql = `select acertos as AcertosQuiz, erros as ErrosQuiz from quizexperiente 
    join usuario on fkUsuario = ${idUsuario} order by quizexperiente.id limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// script de dados do grafico de tempo iniciante
function tempoInciante(limite_linhas) {

    // instruçao que vai ser inserida no sql
    var instrucaoSql = `SELECT usuario.nome AS NomeUsuario, MIN(quiziniciante.tempoFinalizado) AS TempoFinal FROM quiziniciante
    JOIN usuario ON quiziniciante.fkUsuario = usuario.id
    GROUP BY usuario.nome ORDER BY TempoFinal DESC 
    limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// script de dados do grafico de tempo experiente
function tempoExperiente(limite_linhas) {

    // instruçao que vai ser inserida no sql
    var instrucaoSql = `SELECT usuario.nome AS NomeUsuario, MIN(quizexperiente.tempoFinalizado) AS TempoFinal FROM quizexperiente
    JOIN usuario ON quizexperiente.fkUsuario = usuario.id
    GROUP BY usuario.nome ORDER BY TempoFinal DESC 
    limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// script de dados do grafico de ranking iniciante
function rankingIniciante(limite_linhas) {

    // instruçao que vai ser inserida no sql
    var instrucaoSql = `select usuario.nome as Usuario, max(quiziniciante.pontuacao) as Pontuação from quiziniciante 
    join usuario on quiziniciante.fkusuario = usuario.id
    group by Usuario order by Pontuação
    limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// script de dados do grafico de ranking experiente
function rankingExperiente(limite_linhas) {

    // instruçao que vai ser inserida no sql
    var instrucaoSql = `select usuario.nome as Usuario, max(quizexperiente.pontuacao) as Pontuação from quizexperiente 
    join usuario on quizexperiente.fkusuario = usuario.id
    group by Usuario order by Pontuação
    limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// exportando os scripts para serem importados no controller

module.exports = {
    porcentagemExperiente,
    porcentagemInciante,
    tempoExperiente,
    tempoInciante,
    rankingIniciante,
    rankingExperiente
}
