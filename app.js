let numeroSecreto = 0;
let intentos = 0;
// almacena cada numero 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

     if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //habilitar boton 
        document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
     }
    return;
}


function limpiarCaja() {
    /*
    // otro modo mas largo de la funcion de limpiar caja
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    */
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {

    // si el numero generado esta incluido en la lista se hace una operacion si no se hace otra
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {

        listaNumerosSorteados.push(numeroGenerado);

        return numeroGenerado;
    }

    }
}
function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica el número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numero
    // generar número aleatorio
    // inicializar el número de intentos
    condicionesIniciales();
    //desabilitar el botón nuevo juego;
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

