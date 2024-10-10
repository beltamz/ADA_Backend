const net = require('net');
const readLine= require('readline-sync');
const path = require('path');

const client= net.createConnection({port:8080, host:'localHost'});

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
    let isAbs= path.isAbsolute(ruta);
    client.write(ruta);
    isPathAbs(isAbs, ruta);
    client.end();
};

function isPathAbs(isAbs, ruta) {
    if(isAbs){
        console.log(`Su ruta '${ruta}' es absoluta`);
    }else{
        console.log(`Su ruta '${ruta}' no es absoluta`);
    }
}