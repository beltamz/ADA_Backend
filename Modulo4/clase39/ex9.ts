/* Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y
encendido (booleano). Define una función encenderCoche que acepte el objeto
coche y cambie el valor de encendido a true. Muestra el estado del coche en la
consola antes y después de llamar a la función.*/

export let coche : {marca: string, modelo: string, encendido: boolean}= {
    marca: "Toyota",
    modelo: "Hilux",
    encendido: false
};

console.log(`¿Encendido antes de llamar la funcion? ${coche.encendido}`);

function encenderCoche(coche : {marca: string, modelo: string, encendido: boolean}): object {
    coche.encendido=true;
    return coche;
}

encenderCoche(coche);

console.log(`¿Encendido despues de llamar la funcion? ${coche.encendido}`);