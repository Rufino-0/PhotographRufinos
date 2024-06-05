var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function aplicarI(idUsuario, ponto, acerto, erro) {

    console.log("ACESSEI O SCORE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function aplicarI():", idUsuario, ponto, acerto, erro);
    
 
    var instrucaoSql = `
    insert into quizIniciante (fkUsuario, qndPontos, qndAcertos, qndErros ) values ( ${idUsuario}, ${ponto}, ${acerto}, ${erro});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

function pontuacao1(idUsuario, ponto, acerto, erro) {

    console.log("ACESSEI O SCORE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function aplicar():", idUsuario, ponto, acerto, erro);
    
 
    var instrucaoSql = `
    insert into quizIniciante (fkUsuario, qndPontos, qndAcertos, qndErros ) values ( ${idUsuario}, ${ponto}, ${acerto}, ${erro});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function aplicarE(idUsuario, ponto, acerto, erro) {
>>>>>>> 8371e951fd1c1757890263f38cd3a8079bee3a8b

>>>>>>> f5c84f4768dcfc842c0bec7d67eb9bc261cb4eec
function aplicarE(ponto, acerto, erro, idUsuario) {

    console.log("ACESSEI O SCORE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function aplicarE():", idUsuario, ponto, acerto, erro);
    
    var instrucaoSql = `
    insert into quizExperiente (qndPontos, qndAcertos, qndErros, fkUsuario) values (${ponto}, ${acerto}, ${erro}, ${idUsuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    aplicarI,
    aplicarE,
    pontuacao1
};