const path= require('path');

//Ejemplo 1: Obtener el nombre del archivo desde una ruta absoluta

const fullPath= 'home/user/docs/file.txt';
const baseName1= path.basename(fullPath);
console.log("Ejemplo 1: ", baseName1);

//Ejemplo 2: Obtener el nombre del archivo sin la extension

const basename2=path.basename(fullPath,'.txt');//si la extension no coincide, me imprimiria file.txt en vez de file
console.log("Ejemplo 2: ", basename2);

//Ejemplo 3: Uso con rutas relativas
const relativePath= 'src/utils/helpers.js';

const basename3=path.basename(relativePath);
console.log("Ejemplo 3: ", basename3);

//Ejemplo 4: Obtener el nombre de un directorio
const dirPath= 'var/www/html/';
const basename4=path.basename(dirPath);
console.log("Ejemplo 4: ", basename4);

//Ejemplo 5:
const windowsPath= 'C:\\Users\\Belen\\Documents\\claseback.pdf';
const basename5=path.basename(windowsPath);
console.log("Ejemplo 5: ", basename5);
