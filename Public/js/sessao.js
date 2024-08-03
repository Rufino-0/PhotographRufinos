// sessão
var email = sessionStorage.EMAIL_USUARIO;
var nome = sessionStorage.NOME_USUARIO;
let avaliacaoUsuario = sessionStorage.AVALIACAO;

function validarSessao() {

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null && avaliacaoUsuario != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {

    // nova validações para exibir o card 
    if (avaliacaoUsuario == undefined) {

        avaliacao.style.display = 'flex';

    } else if (avaliacaoUsuario == 'ok') {

        setTimeout(function () {
            sessionStorage.clear();
            window.location = "../login.html";
        }, 2500)
    }
}

let nota = '';

function avaliar(resposta) {

    let idUsuario = sessionStorage.ID_USUARIO;


    fetch(`/avaliacao/avaliar`, {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // reatribuindo as variaveis e mandando elas para um json, e assim poder usar nas outras partes de inserção de dados - inserido 02/08/2024
        body: JSON.stringify({

            idUsuario: idUsuario,
            nota: resposta
        }),

    }).then(response => {

        // validações para ver se funcionou ou não a inserção dos dados - inserido 02/08/24

        if (response.ok) {
            nota = resposta;
            exibirAvaliacao();
            console.log('Resultados registrados com sucesso!');

        } else {

            console.error('Erro ao registrar os dados.');

        }

    }).catch(error => {

        console.error('Erro ao enviar a requisição:', error);

    });

}

function exibirAvaliacao() {
    let idUsuario = sessionStorage.ID_USUARIO;

    // puxando dados e enviando a nota e o id do usuario do banco de dados - inserido 02/08/24
    fetch(`/avaliacao/puxarResposta?idUsuario=${idUsuario}&nota=${nota}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    for (let i = 0; i < resposta.length; i++) {
                        let registro = resposta[i];
                        estrelas.style.display = 'none';
                        respostaAvaliacao.style.display = 'flex';

                        respostaAPI.innerText = `Em media ${registro.Resultado_Avaliação}% dos usuarios avaliaram como voce!`
                    }



                    setTimeout(function () {
                        atualizar()
                        window.location = "../index.html";
                    }, 2500)

                });
            } else {
                // se nenhum dado for encontrado vai exibir essa mensagem indicando que não tem nada para exibir - inserido 02/08/24
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        // exibindo o erro caso falhe alguma coisa na requisição inserido 02/08/24
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ ranking: ${error.message}`);
        });
}

function atualizar() {
    let idUsuario = sessionStorage.ID_USUARIO;
    let avalicao = 'ok';

    fetch(`/avaliacao/atualizar`, {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // reatribuindo as variaveis e mandando elas para um json, e assim poder usar nas outras partes de inserção de dados - inserido 02/08/2024
        body: JSON.stringify({

            idUsuario: idUsuario,
            avaliacao: avalicao
        }),

    }).then(response => {

        // validações para ver se funcionou ou não a inserção dos dados inserido 02/08/2024

        if (response.ok) {
            nota = resposta;
            exibirAvaliacao();
            console.log('Resultados registrados com sucesso!');

        } else {

            console.error('Erro ao registrar os dados.');

        }

    })
}