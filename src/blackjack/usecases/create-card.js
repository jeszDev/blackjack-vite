export const createCard = (carta, quienJuega) => {
    // crear elemento img para mostrar carta

    const divCartasContainers = document.querySelectorAll('.div-cartas-container');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasContainers[quienJuega].append(imgCarta);
}