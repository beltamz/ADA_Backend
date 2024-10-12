/* Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
(string), deporte (string), y energia (number). Luego, define una función entrenar
que acepte el objeto deportista y un número de horas de entrenamiento,
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
final, muestra el estado del deportista en la consola.*/

export let deportista :{nombre: string, deporte: string, energia: number}={
    nombre: "Pedro",
    deporte: "Tennis",
    energia: 80
};

function entrenar(deportista : {nombre: string, deporte: string, energia: number}, horas: number): void{
    let energiaARestar= horas*5;
    deportista.energia -= energiaARestar;
    console.log(`La energia del deportista ${deportista.nombre} ahora es de: ${deportista.energia}`);
};

entrenar(deportista, 4);