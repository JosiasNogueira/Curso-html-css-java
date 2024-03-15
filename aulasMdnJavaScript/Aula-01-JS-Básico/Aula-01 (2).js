// const botao = document.querySelector("p");

// botao.addEventListener("click", atualizaNome);

// function atualizaNome() {
//     var nome = prompt("Insira um novo nome");
//     botao.textContent = "Jogador 1:" + nome;
// };

const para = document.querySelector("p");

para.addEventListener("click", atualizarNome);

function atualizarNome() {
  var nome = prompt("Insira um novo nome");
  para.textContent = "Jogador 1: " + nome;
}