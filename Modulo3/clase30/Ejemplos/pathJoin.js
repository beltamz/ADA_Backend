const path = require('path');
const fs= require('fs');

//1:Uno segmentos de rutas simples
const example1= path.join('/user', 'local', 'bin');
console.log("Ejemplo 1: ", example1);

//2: Borro barras redundantes
const example2= path.join('/user/', '/local', 'bin/');
console.log("Ejemplo 2: ", example2);

//3: Normalizando rutas con '..'(subir directorio)
const example3= path.join('/user', 'local', '..', 'bin');
console.log("Ejemplo 3:" , example3);

//4:Construccion ruta relativa multiplataforma
const example4= path.join('docs', 'projects', 'index.html');
console.log("Ejemplo 4: ", example4);

//Obtener ruta absoluta
const filePath= path.join(__dirname, 'pruebaPath.js');
console.log(filePath);//C:\Users\belen\OneDrive\Escritorio\ADA_TRABAJOS\clase30\pruebaPath.js

const configPath= path.join(__dirname, 'config.json');

fs.readFile(configPath,'utf8', (err,data)=>{
    if (err) throw err;
    console.log(data);
});