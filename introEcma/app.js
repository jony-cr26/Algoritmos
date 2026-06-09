// Importación de módulos nativos de ES6
import { registrarDestino, mostrarItinerario } from './viajes.js';

// Iniciar la aplicación utilizando una función flecha
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("New York", "2024-10-12", "Avión"); // Destino extra para probar la lógica

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();