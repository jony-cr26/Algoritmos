function findLongestWord(text) {
    // Divide el texto en palabras individuales
    const words = text.split(' ');
    
    let longestWord = "";
    
    // Desliza una ventana que recorra cada palabra del arreglo
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        
        // Compara las longitudes
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord; // Actualiza si la ventana encuentra una palabra mayor
        }
    }

    return longestWord;
}

//Ejemplo de Uso
const parrafo = "Estás desarrollando una herramienta para ayudar a escritores";
const resultado = findLongestWord(parrafo);

console.log("La palabra más larga es:", resultado); 