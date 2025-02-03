let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valor-usuario").value.trim());

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("label", `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        document.getElementById("nuevo-juego").removeAttribute("disabled");
        document.getElementById("intentar").setAttribute("disabled", "on");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("label", "El número secreto es menor");
        } else {
            asignarTextoElemento("label", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }

    document.getElementById("valor-usuario").focus();

    return;
}

function limpiarCaja() {
    document.getElementById("valor-usuario").value = "";
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumeroSorteados.length === numeroMaximo) {
        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "¡Adivina!");
    asignarTextoElemento("label", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();

    condicionesIniciales();

    document.getElementById("nuevo-juego").setAttribute("disabled", "true");
    document.getElementById("intentar").removeAttribute("disabled");
}

condicionesIniciales();
