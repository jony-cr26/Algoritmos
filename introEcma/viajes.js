// Array constante para guardar los destinos (su contenido muta, pero la referencia no)
const destinos = [];

// Función para calcular el costo del viaje (interna del módulo)
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
};

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino, // Shorthand property name (ES6)
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
};

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    // Uso de for...of (ES6) para recorrer el arreglo de manera más legible
    for (const viaje of destinos) {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    }
};