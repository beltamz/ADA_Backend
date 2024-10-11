let nombre2 : string= 'Marcela';
let edad2 : number | undefined= 36; 

if(typeof edad2 == 'undefined'){
    console.log("Edad no asignada");
}else{
    console.log(`Bienvenida/o ${nombre2}, usted tiene ${edad2} años.`);
};