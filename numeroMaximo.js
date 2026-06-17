function findMax(arr) {
    // Caso base: si el arreglo tiene un solo elemento, ese elemento es el máximo.
    if (arr.length === 1) {
        return arr[0];
    }
    // Caso base adicional (si el arreglo se entrega vacío)
    if (arr.length === 0) {
        return null; 
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);    // Calcular el punto medio
    const left = arr.slice(0, mid);            // Obtener la primera mitad
    const right = arr.slice(mid);              // Obtener la segunda mitad

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos
    // Comparamos el máximo de la izquierda contra el de la derecha y retornamos el mayor.
    return leftMax > rightMax ? leftMax : rightMax;
}

// Ejemplo
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers));