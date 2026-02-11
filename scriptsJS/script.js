function trocarPaginas(){

    let usuario = document.getElementById("inpUsuario").value;
    let senha = document.getElementById("inpsenha").value;  
    let login = document.getElementById("inplogin").value;
    let mensagem = document.getElementById("pMensagem");

    // Se a fropdpwlist não estiver selecionada
    if (usuario === "0") {
        mensagem.innerHTML = "Selecione o tipo de usuário!";
    }

    // Usuário Vendedor 
    else if (usuario === "1" && login === "natai" && senha === "123") {
        alert("Você sera direcionado para a pagina de Vendas.")
        window.location.href = "vendas.html";
    }

    // Usuario Estoquista
    else if (usuario === "2" && login === "natai" && senha === "123") {
        alert("Você sera direcionado para a pagina de Estoque.")
        window.location.href = "estoque.html";
    }

    //  Usuario Administrador 

    else if (usuario === "3" && login === "natai" && senha === "123") {
        alert("Você sera direcionado para a pagina de Administração")
        window.location.href = "administrador.html";
    }

    // ERRO
     else {
        mensagem.innerHTML = "Usuário ou Senha Inválidos!.";
     }


}

function teclaEnter(event) {
    if (event.key === "Enter") {
        trocarPaginas();
    }

}


































