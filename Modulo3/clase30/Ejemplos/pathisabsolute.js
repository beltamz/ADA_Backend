const path = require('path');

//Ejemplor: verificacion de una ruta absoluta
const path1='/home/user/docs/file.txt';
const isAbs= path.isAbsolute(path1);
console.log("Es una ruta absoluta? ", isAbs);