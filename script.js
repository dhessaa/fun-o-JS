var titulo = document.getElementById("titulo")
var btn = document.querySelector("#btn")

function disparaAlerta(){
    alert("Andressa")
    titulo.innerText = "Andressa"
}

btn.addEventListener("click", disparaAlerta)