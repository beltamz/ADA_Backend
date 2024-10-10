const net = require('net');

const server= net.createServer((socket)=>{
    console.log("Cliente conectado");
    
    socket.on('data', (data)=>{
            console.log(`El cliente ${socket.remoteAddress}: ${socket.remotePort} dice : ${data}`);
            if(data!="Hola, servidor"){
                socket.write("Recibido");
            }else{
                socket.write("");
            }
    });

    socket.on('end',()=>{
        console.log("Comunicacion finalizada");
    });

    socket.on('error', (err)=>{
        console.log(`Error: ${err.message}`);
    });
});

server.listen(5000,()=>{
    console.log("El servidor escucha desde el puerto 5000");
});