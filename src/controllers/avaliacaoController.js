var avaliarModel = require("../models/avaliacaoModel");

function avaliarusuario(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html inserido 02/08/24
  var idUsuario = req.body.idUsuario;
  var nota = req.body.nota;


  // Faça as validações dos valores - inserção 02/08/24
  if (idUsuario == undefined) {
    res.status(400).send("Seu Id está undefined!");
  } else if (nota == undefined) {
    res.status(400).send("Sua nota está undefined!");
  } else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js - alteração 26/07/24
    avaliarModel.avaliar(idUsuario, nota)
      .then(
        function (resultado) {
          res.json(resultado);
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}

function atualizar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html - nserção 02/08/24
  var idUsuario = req.body.idUsuario;
  var avaliacao = req.body.avaliacao;


  // Faça as validações dos valores - inserção 02/08/24
  if (idUsuario == undefined) {
    res.status(400).send("Seu Id está undefined!");
  } else if (avaliacao == undefined) {
    res.status(400).send("Sua nota está undefined!");
  } else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js - inserção 02/08/24
    avaliarModel.atualizar(idUsuario, avaliacao)
      .then(
        function (resultado) {
          res.json(resultado);
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}

function puxarResposta(req, res) {

  // limite de dados que vai ser jogado no script sql - inserção 02/08/24
  const idUsuario = req.query.idUsuario;
  const nota = req.query.nota;

  avaliarModel.puxarResposta(idUsuario, nota).then(function (resultado) {
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

module.exports = {
  avaliarusuario,
  puxarResposta,
  atualizar
}