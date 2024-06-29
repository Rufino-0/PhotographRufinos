var database = require("../database/config")

// funções para inserir os dados vindos do controller para inserir no banco de dados

// inserindo os dados do quiz iniciante no banco de dados
function registrarIniciante(usuario, pontos, acertos, erros, tempo) {

    // exibindo o console.log para facilitar a identificação de erros no script do insert do banco de dados

    console.log("ACESSEI O SCORE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarIniciante():", usuario, pontos, acertos, erros, tempo);

    // criando a instrução SQL para inserir os dados no banco de dados e atribuindo os novos valores usando as variáveis

    var instrucaoSql = `
    insert into quizIniciante (fkUsuario, Pontuacao, acertos, erros, tempoFinalizado ) values ( ${usuario}, ${pontos}, ${acertos}, ${erros}, '${tempo}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// inserindo os dados do quiz experiente no banco de dados

function registrarExperiente(usuario, pontos, acertos, erros, tempo) {

    // exibindo o console.log para facilitar a identificação de erros no script do insert do banco de dados

    console.log("ACESSEI O SCORE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarExperiente():", usuario, pontos, acertos, erros, tempo);


    // criando a instrução SQL para inserir os dados no banco de dados e atribuindo os novos valores usando as variáveis

    var instrucaoSql = `
    insert into quizExperiente (fkUsuario, Pontuacao, acertos, erros, tempoFinalizado ) values ( ${usuario}, ${pontos}, ${acertos}, ${erros}, '${tempo}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// pegando os dados das funções do controller para usar nos models 

module.exports = {
    registrarIniciante,
    registrarExperiente
};