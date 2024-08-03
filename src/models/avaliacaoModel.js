var database = require("../database/config")

// funções para fazer as avaliações, atuaizar e puxar as respostas - inserção 02/08/24

function avaliar(idUsuario, nota) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario, nota)

  // script que vai para o banco de dados - inserção 02/08/22
  var instrucaoSql = `
     insert into avaliacao(id_usuario, qnt_estrelas) values ( ${idUsuario}, ${nota} );
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizar(idUsuario, avaliacao) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario, avaliacao)
  // script que vai para o banco de dados - inserção 02/08/22
  var instrucaoSql = `
     update usuario set avaliacao = '${avaliacao}' where id = ${idUsuario};
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



function puxarResposta(idUsuario, nota) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario, nota)
  // script que vai para o banco de dados - inserção 02/08/22
  var instrucaoSql = `
    select round(count(case when qnt_estrelas = ${nota} then 1 end)/count(*) * 100, 0) as Resultado_Avaliação
    from avaliacao where id_usuario = ${idUsuario} group by id_usuario;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  avaliar,
  puxarResposta,
  atualizar
};