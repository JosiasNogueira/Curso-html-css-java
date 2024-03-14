function adicionarDados() {
    // Capturar os valores dos campos de entrada
    var campo1 = document.getElementById("campo1").value;
    var campo2 = document.getElementById("campo2").value;
    var campo3 = document.getElementById("campo3").value;

    // Criar um novo item de lista
    var novoItem = document.createElement("li");
    novoItem.textContent = campo1 + " - " + campo2 + " - " + campo3;

    // Adicionar o novo item à lista
    var lista = document.getElementById("lista");
    lista.appendChild(novoItem);

    // Limpar os campos de entrada após adicionar os dados
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("campo3").value = "";
}
