const net = require('net');

const server= net.createServer();

server.on('connection', (socket)=>{
    console.log(`El cliente ${socket.remoteAddress}: ${socket.remotePort} se ha conectado`);

    socket.setTimeout(10000);

    socket.on('timeout', ()=>{        
        console.log("El tiempo de espera se termino");
        socket.end();
    });

    socket.on('data',(data)=>{
        console.log(`El cliente escribe: ${data}`);
        socket.write("Mensaje recibido");
    });
  
    socket.on('end', ()=>{
        console.log(`La comunicacion ha finalizado`);
    });

    socket.on('error', (err)=>{
        console.log(`Error: ${err.message}`);
    });
});

server.listen(7000,()=>{
    console.log("El servidor escucha desde el puerto 7000");
});