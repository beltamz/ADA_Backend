let estudiante= {
    nombre: "Pepe", 
    edad : 17 , 
    curso : "5A" , 
    notas : [ 8, 5, 9, 6]
};

let estudianteEnJson= JSON.stringify(estudiante);

console.log(estudianteEnJson);

let jsonAObjeto= JSON.parse(estudianteEnJson);

console.log(jsonAObjeto);