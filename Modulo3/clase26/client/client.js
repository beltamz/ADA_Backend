const net= require('net');
const readLine = require('readline-sync');

const client= net.createConnection({port:5000, host:'localHost'},()=>{
    console.log("Usted se conecto al servidor");
    client.write("Hola, servidor");
    sendMessage();
});

client.on('data', (data)=>{
    console.log("El servidor dice: " + data.toString());
    console.log("Hasta luego!");
});

client.on('error', (err)=>{
    console.log(`Error: ${err.message}`);
        
});

function sendMessage(){
    const mensaje= readLine.question("\n Ingrese su mensaje: \t");
    client.write(mensaje);
    client.end();
};