const listaDeCompras = [];

const agregarProducto = (producto) => {
    // Validamos si el producto ya existe
    const existe = listaDeCompras.some(item => item.toLowerCase() === producto.toLowerCase());
    
    if (existe) {
        console.warn(`El producto "${producto}" ya está en la lista de compras.`);
    } else {
        listaDeCompras.push(producto);
        console.log(`"${producto}" ha sido agregado correctamente.`);
    }
};

//Implementar una función para eliminar un producto
const eliminarProducto = (producto) => {
    // Buscamos el indice del producto en el arreglo
    const indice = listaDeCompras.findIndex(item => item.toLowerCase() === producto.toLowerCase());
    
    if (indice !== -1) {
        // Splice elimina el elemento en esa posicion especifica
        listaDeCompras.splice(indice, 1);
        console.log(`"${producto}" ha sido eliminado de la lista.`);
    } else {
        console.error(`No se encontró el producto "${producto}" en la lista.`);
    }
};

//Implementar una función que imprima todos los productos
const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
        return;
    }
    
    console.log("--- LISTA DE COMPRAS ---");
    listaDeCompras.forEach((producto, indice) => {
        console.log(`${indice + 1}. ${producto}`);
    });
    console.log("------------------------");
};

//Pruebas de funcionamiento
agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Manzanas"); // Intento de duplicado

mostrarLista();

eliminarProducto("Leche");
mostrarLista();