let estoque = [];

function adicionarProduto() {
    let nome = document.getElementById("nomeProduto").value;
    let qtd = document.getElementById("qtdProduto").value;
    let preco = document.getElementById("precoProduto").value;

    if (nome === "" || qtd === "" || preco === "") {
        alert("Preencha todos os campos!");
        return;
    }

    estoque.push({ nome, qtd, preco });
    atualizarTabela();
}

function atualizarTabela() {
    let tabela = document.getElementById("listaEstoque");
    tabela.innerHTML = "";

    estoque.forEach(produto => {
        tabela.innerHTML += `
            <tr>
                <td>${produto.nome}</td>
                <td>${produto.qtd}</td>
                <td>R$ ${produto.preco}</td>
            </tr>
        `;
    });
}

function voltar() {
    window.location.href = "index.html";
}
