export const clearScore = () => {
    const puntajesHTML = document.querySelectorAll("small");
    puntajesHTML.forEach((element) => element.innerHTML = 0);
}