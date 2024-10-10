const net = require('net');
const server= net.createServer();

server.on('connection', (socket)=>{
    console.log(`El cliente ${socket.remoteAddress}: ${socket.remotePort} se ha conectado`);

    socket.on('data',(data)=>{
        console.log(`El cliente escribe la ruta: ${data}`);
    });
  
    socket.on('end', ()=>{
        console.log(`La comunicacion ha finalizado`);
    });

    socket.on('error', (err)=>{
        console.log(`Error: ${err.message}`);
    });
});

server.listen(8081,()=>{
    console.log("El servidor escucha desde el puerto 8081");
});