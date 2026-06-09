//Foreach: Este método se utiliza para ejecutar una función específica en cada elemento 
//de un arreglo.
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
    console.log(numero * 2);
});

//map: Este método se utiliza para crear un nuevo arreglo a partir de un arreglo existente, 
//aplicando una función a cada elemento del arreglo original.

const carrito = [
    {nombre: "Fabuloso", precio: 10, categoria: "limpieza", descuento: 0.6},
    {nombre: "Gelatina", precio: 20, categoria: "comida", descuento: 0},
    {nombre: "Cloro", precio: 30, categoria: "limpieza", descuento: 0.5}];

const  productosDeLimpieza = carrito.map(function(producto) {
    if (producto.categoria === "limpieza") {
        return producto;
    }else {
        return null;
    }
});

console.log(productosDeLimpieza);
console.log(carrito);

//filter: Este método se utiliza para crear un nuevo arreglo que contiene 
//solo los elementos que cumplen con una condición específica.
const productosConDescuento = carrito.filter(function(producto) {
    return producto.descuento > 0;
});

console.log(productosConDescuento);

//find: Este método se utiliza para encontrar el primer elemento en un arreglo 
//que cumple con una condición específica.
const productoAlimenticio = carrito.find(function(producto) {
    return producto.categoria === "comida";
});

console.log(productoAlimenticio);

//includes: Este método se utiliza para verificar si un elemento específico existe en un arreglo. 
//Devuelve true si el elemento se encuentra en el arreglo y false si no.

const frutas = ["manzana", "banana", "naranja"];
console.log(frutas.includes("banana"));

//some: Este método se utiliza para verificar si al menos un elemento 
//en un arreglo cumple con una condición específica.

const hayProductoConDescuento = carrito.some(function(producto) {
    return producto.descuento > 0;
});

console.log(hayProductoConDescuento);

//every: Este método se utiliza para verificar si todos los elementos en un arreglo 
//cumplen con una condición específica.
const todosSonDeLimpieza = carrito.every(function(producto) {
    return producto.categoria === "limpieza";
});

console.log(todosSonDeLimpieza);

//sort: Este método se utiliza para ordenar los elementos de un arreglo.
const numerosDesordenados = [5, 2, 9, 1, 5, 6];
numerosDesordenados.sort(function(a, b) {
    return a - b;
});

console.log(numerosDesordenados);

//reduce: Este método se utiliza para reducir un arreglo a un solo valor, 
//aplicando una función a cada elemento del arreglo.
const numeros2 = [1, 2, 3, 4, 5];
const suma = numeros2.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(suma);