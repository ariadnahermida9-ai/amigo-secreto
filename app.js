// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);

    mostrarLista();

    input.value = "";
}

function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    listaAmigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre para continuar.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultados previos

    let li = document.createElement("li");
    li.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
    resultado.appendChild(li);
}