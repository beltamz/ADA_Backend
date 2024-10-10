const net = require('net');
const fs = require('fs');//Modulo para interactuar con el sistema de archivos
const path= require('path');//modulo para manejar rutas de archivos

//Variables globales
const PORT=4000;
const HISTORY_FILE=path.join(__dirname, 'history.json');

//Arreglo para almacenar clientes conectados

let clients=[];

//Creo el servidor TCP

const server= net.createServer((socket)=>{
    console.log(`El usuario ${socket.remoteAddress}:${socket.remotePort} se ha conectado.`);

    clients.push(socket);

    socket.on('data', (data)=>{
        const message= data.toString().trim();
        console.log("Mensaje recibido: ", message);   
        
        if(message==='--history'){
            //Si el mensaje es '--history', enviar el historial de mensajes al cliente
            const history=loadHistory();
            socket.write(JSON.stringify(history, null, 2));//envio el historial como JSON
        }else if(message==='--eraseMessages'){
            //Si el mensaje es '--eraseMessages', borrar el historial de mensajes
            saveHistory([{}]);//guardo un arreglo con un solo objeto vacio
            socket.write('History has been erased.');//confirmo al cliente q se borro
        }else{
            //envio el mensaje a todos los clientes conectados
            clients.forEach(client=>{
                if(client!==socket){//no envio el mensaje al cliente que lo envio
                    client.write(message);
                }
            })
    
            //preparo el objeto de mensaje para almacenar en el historial
            const timestamp= getFormattedDate();//obtener la fecha y hora actual en el formato dd/mm/yyyy- hh:mm
            const userName= process.argv[2]?.split('=')[1]||"Unknown";
            const messageObject={
                message,//mensaje recibido
                sentBy: userName,//nombre del usuario que envio el mensaje
                date:timestamp//fecha y hora en la que se envio el mensaje
            };
    
            //cargo el historial de mensajes existentes
            const history= loadHistory();
            history.push(messageObject);//añado el nuevo mensaje al historial
            saveHistory(history);//Guardar el historial actualizado
            }
    });
    //manejar desconexion de clientes
    socket.on('end', ()=>{
        console.log(`Cliente desconectado:`, socket.remoteAddress);
        clients= clients.filter(client=>client !==socket);// elimino el cliente del arreglo
    });
    
});

//funcion para cargar el historial de mensajes
const loadHistory=()=>{
    try{
        const data= fs.readFileSync(HISTORY_FILE, 'utf8');//leer el archivo de historial
        return JSON.parse(data);//parsear los datos como JSON
    }catch(err){
        console.error('Error al cargar el historial:', err);
        return[];//retornar un arreglo vacio si ocurre un error
    }
};

//funcion para gurdar el historial de mensajes

const saveHistory=(history)=>{
    try{
        fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));//escribir el historial en el archivo
    }catch(err){
        console.error('Error al guardar el historial:', err);
    }
};

//funcion para obtener la fecha y hora en formato dd/mm/yyyy - hh: mm

const getFormattedDate=()=>{
    const now= new Date();
    const day= String(now.getDate()).padStart(2,'0');
    const month= String(now.getMonth()+1).padStart(2,'0');
    const year=now.getFullYear();
    const hours=String(now.getHours()).padStart(2, '0');
    const minutes=String (now.getMinutes()).padStart(2,'0');

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
}

   

  
server.listen(PORT,()=>{
    console.log("El servidor escuchando en 127.0.0.1:" + PORT);
});

