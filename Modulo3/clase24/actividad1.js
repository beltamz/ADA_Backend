let libro= {
    "titulo":"La casa de alado", 
    "autor" : "Pepe" , 
    "anio" : 1989 , 
    "genero" : ["drama", "novela", "policial"]
};

console.log(`Titulo: ${libro.titulo} , Autor: ${libro.autor}.`);
libro.anio=2000;
libro["cantPaginas"]=349;
console.log(libro);