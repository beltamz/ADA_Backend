/*• Ejercicio 3: Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto pueden usar forEach o investigar el método “findIndex()”
4. Verifique si existe un producto con precio mayor a 50. Para esto investigar el método “.some()”
5. Devuelva una cadena de nombres de productos separados por
comas.
 */

function gestionarProductos(productos) {
    let nuevo= {nombre:"Yerba", precio:45};
    productos.push(nuevo);
    productos.pop();

    let posicionChocolates= productos.findIndex(producto=>producto.nombre==="Chocolates"); 
    let hayPrecioMayor50= productos.some(producto=>producto.precio>50);

    console.log("Posicion del producto Chocolates: " + posicionChocolates);
    console.log("Hay precio mayor a 50? " + hayPrecioMayor50);

    let prodNombres=productos.map(producto=>producto.nombre);

    let separados=prodNombres.join(", ");
    console.log("Lista solo nombre de productos: " + separados);

    return productos;
}

let productos=[
    {nombre:"Alfajores", precio: 30},
    {nombre:"Chocolates", precio: 50},
    {nombre:"Chupetines", precio: 70},
    {nombre:"Caramelos", precio: 20},
    {nombre:"Bombones", precio: 20}
];

console.log("Lista antes: ");
console.log(productos);
gestionarProductos(productos);
console.log("Lista despues: ");
console.log(productos);

