const net= require('net');
const readLine= require('readline');
//Configuramos la conexion
const OPTIONS={
    port:4000,
    host: '127.0.0.1'
};
//Creamos la conexion tcp al servidor
const clientTCP= net.createConnection(OPTIONS);

//Configuramos la interfaz readline
const rl= readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//Obtenemos el nombre del usuario desde los argumentos de la linea de comando(Si no hay usar unknown)
const userName = process.argv[2]?.split('=')[1] || 'Unknowm';

//funcion para manejar la entrada del usuario
const handleInput=()=>{
        //Leo la entrada del usuario
        rl.question('CLIENT-->', (mensajeCliente)=>{
            //Envio mensaje al servidor
            clientTCP.write(mensajeCliente);
            //Vuelvo a llamar a la funcion para para permitir mas entradas
            handleInput();
        });
};

//Manejar la conexion exitosa al servidor
clientTCP.on('connect',()=>{
    console.log(`Bienvenido/a al servidor`);
    handleInput();//Llamo a la funcion para manejar la entrada del usuario
});
//Manejo datos del servidor
clientTCP.on('data', (serverData)=>{
    const mensajeServidor= serverData.toString();//convierto los datos en una cadena de texto
    console.log(`El servidor dice: ${serverData}`);
});

clientTCP.on('end', ()=>{
    console.log('Se ha cerrado la conexion');
    rl.close();//cierro la interfaz de readline
});

clientTCP.on('error', (err)=>{
    console.log(`Error: ${err.message}`);
    rl.close();//cierro la interfaz de readline
});