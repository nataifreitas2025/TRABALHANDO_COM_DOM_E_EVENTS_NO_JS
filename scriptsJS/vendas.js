let vendas = [];

function registrarVenda() {
    let produto = document.getElementById("produtoVenda").value;
    let qtd = document.getElementById("qtdVenda").value;

    if (produto === "" || qtd === "") {
        alert("Preencha os campos!");
        return;
    }

    vendas.push(`${produto} - Quantidade: ${qtd}`);
    atualizarVendas();
}

function atualizarVendas() {
    let lista = document.getElementById("listaVendas");
    lista.innerHTML = "";

    vendas.forEach(venda => {
        let li = document.createElement("li");
        li.innerText = venda;
        lista.appendChild(li);
    });
}

function voltar() {
    window.location.href = "index.html";
}
