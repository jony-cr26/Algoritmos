// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función para buscar recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base donde se llega al final de la lista.
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base donde se encuentra el regalo.
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Realizar la llamada recursiva para seguir buscando el regalo.
    return findGift(gifts, giftName, index + 1);
}

// Ejemplos:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));