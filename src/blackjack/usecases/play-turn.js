import { createCard ,cardRequest, cardValue } from "./";


export const playTurn = (quienJuega, puntaje, deck) => {
    const carta = cardRequest(deck);     
    const puntajesHTML = document.querySelectorAll("small");
    puntaje += cardValue(carta);    
    puntajesHTML[quienJuega].innerText = puntaje;
    createCard(carta, quienJuega);

    return puntaje * 1;
}