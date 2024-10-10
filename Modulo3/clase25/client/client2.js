const net= require('net');
const readLine= require('readline-sync');
const options={
    port:5000,
    host: '127.0.0.1'
};
const client= net.createConnection(options);

client.on('connect',()=>{
    console.log('Conexion satisfactoria');
    sendLine();
});

client.on('data', (data)=>{
    console.log('El servidor dice:' + data);
    sendLine();
});

client.on('error', (err)=>{
    console.log(err.message);
});

function sendLine() {
    var line = readLine.question('\n Escriba algo:/ 0 para finalizar \t');
    if(line=="0"){
        console.log("Usted se ha desconectado");
        client.end();
    }else{
        client.write(line);
    }
}