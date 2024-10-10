const net = require('net');
const readLine= require('readline-sync');

const client= net.createConnection({port:7000, host:'localHost'});

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
    var mensaje = readLine.question(`Ingrese su mensaje:`);
    client.write(mensaje);
    client.end();
};