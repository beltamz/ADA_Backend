const net = require('net');
const {v4:uuidv4}= require('uuid');

const server= net.createServer((socket)=>{
    const idv4= uuidv4();

    console.log(`El usuario ${idv4} se ha conectado`);

    socket.write(`Su UUUID es: ${idv4}.`);

    socket.on('end', ()=>{
        console.log(`Comunicacion con ${idv4} finalizada`);
    });

    socket.on('error', (err)=>{
        console.log(`Error: ${err.message}`);
    });
});

server.listen(4000,()=>{
    console.log('El servidor escucha en el puerto 4000 ');
});