//Botão para trocar a foto, Trocar Foto usando query selector
function mudarEstilo() {
    document.querySelector("body").style.background = "yellow";
    document.querySelector("img").src = "imagens/idiota.jpg";
    document.querySelector("h1").style.fontSize = "40pt";
    document.querySelector("h1").style.color = "blue";
    document.querySelector("h1").style.background = "pink";
    document.querySelector("p").style.fontStyle = "italic";
    document.querySelector("p").style.fontFamily = "verdana";

    document.getElementById("subtitulo").style.background = "beige";
    document.getElementsByClassName("text")[0].style.fontFamily = "verdana";
    document.getElementsByClassName("text")[0].style.fontSize = "20pt";
    document.getElementsByClassName("text")[0].style.color = "blue";
}

function resposta1() {
    document.querySelector("#resposta1").style.visibility = "hidden";
}