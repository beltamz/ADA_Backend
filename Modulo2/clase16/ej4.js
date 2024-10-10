/*Ejercicio 4: forEach “Lista de supermercado”
Para este ejercicio, contamos con un array llamado listaDeSuperMercado que contiene una lista de ítems para comprar.
Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach.
Ademas, debemos realizar las siguientes operaciones:
Agrega el artículo 'Papas' al final de la lista utilizando el método push.
Elimina el primer artículo de la lista utilizando el método shift.
Utiliza el método forEach para recorrer el arreglo listaDeSuperMercado y mostrar cada ítem por consola.
Busca la posición del artículo 'Cereales' utilizando el método lastIndexOf y muestra su posición en la lista (considerando que los índices comienzan desde 1 en la lista mostrada al usuario), o indica que no se encontró si no está presente.
*/

const prompt = require("prompt-sync")({sigint: true});

function imprimirConsola(listaDeSuperMercado) {
    let i=1;
    listaDeSuperMercado.forEach(producto => {
        console.log(`${i}) ${producto}`);
        i++;
    });
}

let listaDeSuperMercado=[
    "Bife de chorizo",
    "Coca-Cola",
    "Bananas",
    "Lechuga",
    "Chimichurri",
    "Lata de tomates",
    "Arvejas",
    "Cereales",
    "Pechuga de pollo",
    "Leche"
];
console.log("~Lista antes de los cambios~");
imprimirConsola(listaDeSuperMercado);

listaDeSuperMercado.push("Papas");
listaDeSuperMercado.shift();
console.log("~Lista después de los cambios~");
imprimirConsola(listaDeSuperMercado);

let estaCereales= listaDeSuperMercado.indexOf("Cereales");
if(estaCereales>=0){
    console.log("Cereales está en la lista en la posición " + (estaCereales+1) + ".");
}else{
    console.log("No se encontró cereales.");
}