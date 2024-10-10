const net= require('net');

const client = net.createConnection({port:4000,host: 'localHost'});

client.on('connect',()=>{
    console.log("Bienvenido al servidor");
});

client.on('data', (data)=>{
    const idv5= JSON.parse(data);
    console.log(`Server:Su UUID es ${idv5.toString()}. (Objeto)`);
    client.end();
});

client.on('end', ()=>{
    console.log("Sesion finalizada"); 
});

client.on('error', (err)=>{
    console.log(`Error: ${err.message}`);
});