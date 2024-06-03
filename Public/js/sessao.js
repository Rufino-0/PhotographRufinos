// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}
function limparSessaohome() {
    alert("Redirecionando para Home, faça login pra entrar novamente")
    sessionStorage.clear();
    window.location = "../index.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("loader");
    divAguardar.style.display = "flex";
}
function aguardarCadastro() {
    var divAguardar = document.getElementById("loaderCad");
    divAguardar.style.display = "flex";
}
