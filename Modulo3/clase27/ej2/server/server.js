const net = require('net');

const server= net.createServer();

let clientes=[];

server.on('connection', (socket)=>{
    let cliente=socket.remotePort;
    clientes.push(cliente); 

    console.log(`El cliente ${socket.remoteAddress}: ${socket.remotePort} se ha conectado`);
    console.log(`Clientes conectados hasta el momento: ${clientes}`);

    socket.on('data',(data)=>{
        console.log(`${socket.remotePort} escribe: ${data}`);
        socket.write("Mensaje recibido");
    });
  
    socket.on('end', ()=>{
        console.log(`Cliente (${socket.remotePort}) se ha desconectado`);        
    });

    socket.on('error', (err)=>{
        console.log(`Error: ${err.message}`);
    });
});

server.listen(9000,()=>{
    console.log("El servidor escucha desde el puerto 9000");
});