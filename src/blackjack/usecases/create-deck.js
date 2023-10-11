import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} cartasNormales Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} cartasEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>}
 */
export const createDeck = (cartasNormales, cartasEspeciales) => {

    if (!cartasNormales || cartasNormales.length === 0)
        throw new Error('Las cartasNormales es obligatorio como un arreglo de string');
    
    if (!cartasEspeciales || cartasEspeciales.length === 0)
        throw new Error('Las cartasNormales es obligatorio como un arreglo de string');

    let deck = [];
    for (let i = 2; i <= 10; i++){
        for (const cartaNormal of cartasNormales) {
            deck.push( i + cartaNormal )
        }
    }

    for (const cartaNormal of cartasNormales) {
        for (const cartaEspecial of cartasEspeciales) {
            deck.push(cartaEspecial + cartaNormal)
        }
    }

    return _.shuffle(deck);
}