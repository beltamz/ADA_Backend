const net = require('net');
const readLine= require('readline-sync');
const path = require('path');

const client= net.createConnection({port:8081, host:'localHost'});

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
    normalizePath(ruta);
    client.end();
};

function normalizePath(ruta) {
   let normalizedPath= path.normalize(ruta);
   console.log("Su ruta normalizada: ", normalizedPath);  
};