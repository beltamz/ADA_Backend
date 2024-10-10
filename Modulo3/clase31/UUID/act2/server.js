const net = require('net');
const {v5:uuidv5}= require('uuid');

const server= net.createServer((socket)=>{
    const NAMESPACE= uuidv5.URL;
    const namev5= "Belen";
    const idv5= uuidv5(namev5, NAMESPACE);    
    
    console.log(`El usuario ${idv5} se ha conectado`);

    const idv5JSON= JSON.stringify(idv5);
    socket.write(idv5JSON);

    socket.on('end', ()=>{
        console.log(`Comunicacion con ${idv5} finalizada`);
    });

    socket.on('error', (err)=>{
        console.log(`Error: ${err.message}`);
    });
});

server.listen(4000,()=>{
    console.log('El servidor escucha en el puerto 4000 ');
});