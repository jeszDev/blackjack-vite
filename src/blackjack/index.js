import _ from 'underscore';
import {clearScore, clearCards, createDeck, playTurn } from './usecases'


let deck = [];
const cartasNormales = ['C', 'D', 'H', 'S'],
    cartasEspeciales = ['A', 'J', 'Q', 'K'];
let puntajes = [];

// Referencias del HTML
const btnJuegoNuevo = document.querySelector('#btn-juego-nuevo'),
    btnPedirCarta = document.querySelector('#btn-pedir-carta'),
    btnDetenerJuego = document.querySelector('#btn-detener-juego');            

// Esta funcion inicializa el juego
const inicializarJuego = (numeroJugadores = 2) => {
    // crear deck
    deck = createDeck(cartasNormales, cartasEspeciales);

    // establecer puntajes a 0
    puntajes = [];
    for (let i = 0; i < numeroJugadores; i++) {
        puntajes.push(0);            
    }

    // limpiando puntajes
    clearScore();
    
    // limpiando cartas
    clearCards();

    btnPedirCarta.disabled = false;
    btnDetenerJuego.disabled = false;
}


// Eventos
btnPedirCarta.addEventListener('click', () => {
    puntajes[0] = playTurn(0, puntajes[0], deck);
    puntajes[1] = playTurn(1, puntajes[1], deck);
});

btnDetenerJuego.addEventListener('click', () => {
    btnPedirCarta.disabled = true;
    btnDetenerJuego.disabled = true;
});

btnJuegoNuevo.addEventListener('click', () => {
    inicializarJuego();                    
});



