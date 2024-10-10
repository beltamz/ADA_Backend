const path = require('path');

//Ejemplo 1: 
const filePath='/home/user/docs/file.txt' ;
const extName1=path.extname(filePath);
console.log("Ejemplo 1: ", extName1);

//Ejemplo 2: 
const noExtPath= 'home/user/docs/README' ;
const extName2=path.extname(noExtPath);
console.log("Ejemplo 2: ", extName2);

//Ejemplo 3: 
const multPath= 'images/photo.large.jpg' ;
const extName3=path.extname(multPath);
console.log("Ejemplo 3: ", extName3);