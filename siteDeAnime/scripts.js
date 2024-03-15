function adicionar() {
    //Capturar os valores dos campos de entrada

const nome = document.getElementById("name").value;
const ep = document.getElementById("epsodio").value;
const status = document.getElementById("estatus").value;

// Criar um novo item de lista
const novoItem = document.createElement("li");
novoItem.textContent = nome + "-" + ep + "-" + status;

// Adicionar o novo item à lista
const lista = document.getElementsByClassName("nomeAnime");
lista.appendChild(novoItem);

// Limpar os campos de entrada após adicionar os dados
document.getElementById("name").value = "";
document.getElementById("epsodio").value = "";
document.getElementById("estatus").value = "";
}

