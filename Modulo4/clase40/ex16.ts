/*Ejercicio 16: Uso de enum para categorías de productos
1. Declara un enum llamado CategoriaProducto con los valores: Electrónica,
Ropa, Alimentos, Muebles.
2. Crea una función que reciba un valor del enum y devuelva un mensaje
sobre qué tipo de productos incluye esa categoría.
3. Llama a la función con el valor Alimentos y muestra el resultado por
consola. */

enum CategoriaProducto{
    Electrónica,
    Ropa,
    Alimentos,
    Muebles
};
devolverProductos(CategoriaProducto.Alimentos);

function devolverProductos(categoria:CategoriaProducto):void {
    switch (categoria) {
        case CategoriaProducto.Electrónica:
            console.log(`Productos incluidos: Lavarropas, televisor, heladera, computadora.`);
        break;
        case CategoriaProducto.Ropa:
            console.log(`Productos incluidos: Remera, pantalon, camisa, vestido.`);
        break;
        case CategoriaProducto.Alimentos:
            console.log(`Productos incluidos: Harina, azucar, pan, arroz. `);
        break;
        case CategoriaProducto.Muebles:
            console.log(`Productos incluidos: Sofa, mesa, silla, alacena.`);
        break;
        default:
            console.log("Opcion no valida");
        break;
    };
};