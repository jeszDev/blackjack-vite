/**
 * Esta función permite tomar una carta del deck
 * @param {Array<String>} deck 
 * @returns {String}
 */
export const cardRequest = (deck) => {       
    if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
    }

    return deck.pop();
}