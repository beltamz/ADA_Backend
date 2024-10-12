/*Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
función debe retornar el área de la figura. Usa tipos específicos para cada caso. */

export let figura: string="circulo";
console.log(`El area de su ${figura} es de ${calcularArea(figura)}`);

figura="rectangulo";
console.log(`El area de su ${figura} es de ${calcularArea(figura)}`);

function calcularArea( figura: string) {
    if(figura=="circulo"){
        let radio= solicitarRadio();
        let area= Math.PI * radio; 
        return area;
    }else if(figura=="rectangulo"){
        let ancho= solicitarAncho();
        let alto= solicitarAlto();
        let area= alto *ancho; 
        return area;
    }
};

function solicitarRadio(): number{
    let radio: number = 56;
    return radio;
};

function solicitarAncho(): number{
    let ancho: number = 45;
    return ancho;
};

function solicitarAlto(): number{
    let alto: number = 21;
    return alto;
};
