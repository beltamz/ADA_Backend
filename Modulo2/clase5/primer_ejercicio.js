let edad=25;
let nombre= "Ana";
let estaEstudiando = true;

const PI= 3.14;
const PAIS= "Argentina";

let cantidadDeLibros= 10;
let tituloLibro= "El principito";
let esInteresante=true;
let temas= ["Aventura", "Fantasia", "Filosofia"];
let autor= {
    nombre:"Antoine de Saint-Exupery", 
    nacionalidad: "Francesa"
};

let esMayorDeEdad= edad>=18;
let puedeVotar= esMayorDeEdad && estaEstudiando;

console.log("Nombre: ", nombre);
console.log("Edad: ", edad);
console.log("Esta estudiando? : ", estaEstudiando);
console.log("Constante PI: ", PI);
console.log("Constante Pais: ", PAIS);
console.log("Cantidad de libros: ", cantidadDeLibros);
console.log("Titulo del libro: ", tituloLibro);
console.log("Es interesante?: ", esInteresante);
console.log("Temas del libro: ", temas);
console.log("Autor del libro: ", autor);
console.log("Es mayor de edad?: ", esMayorDeEdad);
console.log("Puede votar?: ", puedeVotar);


