const prompt =require('prompt-sync')({sigint:true});

let declaracionJurada=0;
let licenciaAnterior;
let pagosMunicipio;
let infracciones;
let flag=true;

console.log("Vamos a renovar el registro de conducir: ");

do {
    declaracionJurada= prompt("Completó la declaración jurada? 1-Si  /  2-No");
    if(declaracionJurada==2){
            console.log("Primero debe completarla");
    }
} while (declaracionJurada==2);

do {
    pagosMunicipio= prompt("Pagó el tramite del municipio? 1-Si / 2-No");
    if(pagosMunicipio==2){
        console.log("Primero abone el tramite");
    }
} while (pagosMunicipio==2);


while(flag==true){
    licenciaAnterior= prompt("Tiene su licencia anterior? 1-Si  /  2-No");
    
    if (licenciaAnterior==2) {
        console.log("No puede renovar su registro sin su licencia previa");
        flag=false;
        break;
    }
    
    infracciones= prompt("Adeuda alguna infracción? 1- Si  / 2-No");
    if(infracciones==1){
        console.log("No puede renovar su licencia si adeuda alguna infraccion");
        flag=false;
        break;
    }

    if(licenciaAnterior==1 && infracciones==2){
        console.log("Posee todo lo necesario para renovar su registro.");
        flag=false;
    }

}






