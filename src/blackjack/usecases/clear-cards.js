export const clearCards = () => {
    const divCartasContainers = document.querySelectorAll('.div-cartas-container');
    divCartasContainers.forEach((element) => element.innerText = ''); 
}