const productos = [
  { nombre: "Teclado Mecánico", precio: 85, categoria: "Electrónica" },
  { nombre: "Mouse Inalámbrico", precio: 45, categoria: "Electrónica" },
  { nombre: "Monitor Gamer", precio: 250, categoria: "Electrónica" },
  { nombre: "Cuaderno Inteligente", precio: 25, categoria: "Papelería" },
  { nombre: "Mochila Ergonómica", precio: 60, categoria: "Accesorios" },
  { nombre: "Escritorio Elevable", precio: 350, categoria: "Muebles" }
];

console.log("--- 1. Lista Original de Productos ---");
console.log(productos);


// Filtrar productos que cuesten menos de $100

const productosBaratos = productos.filter(producto => producto.precio < 100);

console.log("\n--- 2. Productos con precio menor a $100 ---");
console.log(productosBaratos);


// Ordenar alfabéticamente por nombre

const productosOrdenados = [...productosBaratos].sort((a, b) => {
  return a.nombre.localeCompare(b.nombre);
});

console.log("\n--- 3. Productos filtrados y ordenados alfabéticamente ---");
console.log(productosOrdenados);


// Generar un arreglo solo con los nombres

const nombresProductos = productosOrdenados.map(producto => producto.nombre);


// Mostrar los resultados finales
console.log("\n--- 4 y 5. Resultado Final (Solo nombres) ---");
console.log(nombresProductos);