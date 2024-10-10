/* Ejercicio 4: Última aparición de un modelo de auto
En este ejercicio, trabajaremos con una lista de modelos de autos.
Implementa una función ultimaAparicionModeloAuto(modelo) que encuentre
y muestre la última posición en la lista donde aparece el modelo específico
de auto dado por modelo.
Datos Iniciales:
✓ Utiliza un array llamado modelosAutos que contenga varios modelos
de autos, algunos repetidos para demostrar la funcionalidad de
lastIndexOf.
Funcionalidad:
✓ Implementa ultimaAparicionModeloAuto(modelo), que toma modelo
como parámetro (un string) y utiliza el método lastIndexOf para
encontrar la última posición en modelosAutos donde modelo aparece.
✓ Si modelo se encuentra en el array, imprime por consola la posición
encontrada (índice + 1 para mostrar el número de posición).
✓ Si modelo no está en el array, imprime un mensaje indicando que el
modelo no está presente.*/

const prompt = require("prompt-sync")({sigint: true});

function ultimaAparicionModeloAuto(modelo){
    let aBuscar= prompt("Ingrese un modelo de auto: ");
    let encontro= modelo.lastIndexOf(aBuscar); 
    
    if(encontro==-1){
        console.log("Su modelo no esta presente");
    }else{
        console.log("Su modelo aparece en la posición " + (encontro+1));
    }
}

let modelosAutos=["Fiat" ,"Audi", "Chevrolet", "Fiat", "Audi", "Toyota"];
ultimaAparicionModeloAuto(modelosAutos);

