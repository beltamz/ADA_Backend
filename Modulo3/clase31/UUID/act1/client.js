const net= require('net');

const client = net.createConnection({port:4000,host: 'localHost'});

client.on('connect',()=>{
    console.log("Bienvenido al servidor");
});

client.on('data', (data)=>{
    console.log(`Server: ${data.toString()}`);
    client.end();
});

client.on('end', ()=>{
    console.log("Sesion finalizada"); 
});

client.on('error', (err)=>{
    console.log(`Error: ${err.message}`);
});