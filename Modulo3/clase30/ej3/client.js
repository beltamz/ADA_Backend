const net = require('net');
const readLine= require('readline-sync');
const path = require('path');

const client= net.createConnection({port:8082, host:'localHost'});

client.on('connect',()=>{
    console.log('Bienvenido al servidor');
    enviarMensaje();
});

client.on('data', (data)=>{
    console.log(`El servidor dice: ${data.toString()}`);
});

client.on('error', (err)=>{
    console.log(`Error: ${err.message}`);
});

client.on('end', ()=>{
    console.log('Conexion con el servidor finalizada');
});

function enviarMensaje(){
    var ruta = readLine.question(`Ingrese su ruta:`);
    client.write(ruta);
    baseName(ruta);
    dirName(ruta);
    extensionName(ruta);
    client.end();
};

function baseName(ruta) {
    let baseNamePath= path.basename(ruta);
    console.log("El nombre de su archivo es: ", baseNamePath);
}

function dirName(ruta) {
    let dirNamePath= path.dirname(ruta);
    console.log("El directorio contenedor de su archivo es: ", dirNamePath);
}

function extensionName(ruta) {
    let extNamePath= path.extname(ruta);
    console.log("La extensión de su archivo es: ", extNamePath);
}