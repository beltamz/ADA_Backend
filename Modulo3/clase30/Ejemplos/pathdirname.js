const path= require('path');

//1: Obtener el directorio contenedor de un archivo desde una ruta absoluta
const filePath= '/home/user/docs/file.txt';
const dirName1= path.dirname(filePath);
console.log("Ejemplo 1: ", dirName1);

//2: Obtener el directorio de un archivo usando una ruta relativa
const relativePath='src/utils/helpers.js';
const dirName2= path.dirname(relativePath);
console.log("Ejemplo 2: ", dirName2);

//3:Uso con rutas de windows
const windowsPath= 'C:\\Users\\Admin\\Documents\\back.pdf';
const dirName3=path.dirname(windowsPath);
console.log("Ejemplo 3: ", dirName3);

