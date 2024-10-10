const readLineSync = require('readline-sync');
const crypto= require('crypto');

const opciones=['Ver mensaje de bienvenida', 'Generar hash de un texto', 'Salir'];

const eleccion= readLineSync.keyInSelect(opciones,"Ingrese una opcion:");

if(eleccion==-1){
    console.log("Opcion incorrecta");
}else{
    console.log(`Eligió ${opciones[eleccion]}`);

    switch (eleccion) {
        case 0:
            console.log("Bienvenid@!");
        break;
        case 1:
            let texto= readLineSync.question("Ingrese un mensaje:");
            let nroHash= crypto.createHash('sha256');
            nroHash.update(texto);
            let hashOutput= nroHash.digest('hex');
            console.log(`Su nro hash: ${hashOutput}, del mensaje "${texto}"`);
        break;
        case 3:
            console.log("Hasta pronto!");
        break;
    }
}