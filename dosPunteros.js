// La lista debe estar ordenada alfabéticamente como indica el problema
const invitados = [
  "Alberto",
  "Beatriz",
  "Carlos",
  "Daniel",
  "Diana", // Primer par consecutivo que inicia con 'D'
  "Eduardo",
  "Esteban"
];

console.log("--- Lista de Invitados Ordenada ---");
console.log(invitados);

// Función para encontrar el par usando Dos Punteros
function encontrarParConsecutivo(lista) {
  // Validación por si la lista está vacía o tiene un solo elemento
  if (lista.length < 2) {
    return "No hay suficientes invitados para formar un par.";
  }

  // Paso 1: Inicializar el primer puntero al inicio (i) y el segundo al siguiente elemento (j)
  let i = 0;
  let j = 1;

  // Paso 5: Detener la búsqueda si recorres toda la lista sin encontrar un par
  while (j < lista.length) {
    
    // Paso 2: Obtener las iniciales en mayúscula para evitar problemas de case-sensitivity
    const inicialI = lista[i][0].toUpperCase();
    const inicialJ = lista[j][0].toUpperCase();

    // Paso 3: Si coinciden, detén la búsqueda y devuelve los nombres
    if (inicialI === inicialJ) {
      return {
        encontrado: true,
        invitado1: lista[i],
        invitado2: lista[j],
        posiciones: [i, j],
        letra: inicialI
      };
    }

    // Paso 4: Si no coinciden, avanza ambos punteros una posición hacia adelante y repite
    i++;
    j++;
  }

  // Si el ciclo termina sin retornar, significa que no se encontró ningún par
  return { encontrado: false, mensaje: "No se encontraron invitados consecutivos con la misma inicial." };
}

// Resultados
console.log("\n--- Ejecutando algoritmo de Dos Punteros ---");
const resultado = encontrarParConsecutivo(invitados);

if (resultado.encontrado) {
  console.log(`¡Par encontrado con éxito!`);
  console.log(`• Pareja: ${resultado.invitado1} y ${resultado.invitado2}`);
  console.log(`• Letra inicial compartida: "${resultado.letra}"`);
  console.log(`• Índices en el arreglo: [${resultado.posiciones.join(", ")}]`);
} else {
  console.log(resultado.mensaje);
}