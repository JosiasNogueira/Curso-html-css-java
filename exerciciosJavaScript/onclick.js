var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
const name = document.querySelector(".name");
const btn = document.querySelector("button");
 
btn.addEventListener("click", trocaCor);
    function trocaCor() {
        name.style.backgroundColor = randomColor;
}