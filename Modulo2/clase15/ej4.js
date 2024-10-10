/* Ejercicio 4: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada. Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1,
semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.
a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos
indican semana 2 tenemos que sumar la fila 1 de la matriz.Recordar que las matrices comienzan siempre en posición 0.
b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el
mes.
✓ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
✓ Posibles matrices para comprobar los resultados.
Día 1 Día 2 Día 3 Día 4 Día 5 Día 6 Día 7
Semana 1 1135 2500 900 1600 2800 3650 1100
Semana 2 1750 1890 1900 1300 898 1750 2800
Semana 3 1700 1150 1690 1900 1770 4500 2560
Semana 4 800 1250 1430 2100 1980 1270 950*/
const prompt = require("prompt-sync")({sigint: true});

//ingresar datos
function ingresarDatos(matriz){
    for (let i = 0; i < 4; i++) {
        console.log(`Semana ${(i+1)} :`);
    
        for (let j = 0; j < 7; j++) {
            console.log(`Dia ${(j+1)} :`);
            matriz[i][j]=parseInt(prompt(`Ingrese el gasto del dia:`));        
        }    
        console.log("-------------------------------");
    }    
}

//total x semana especifico
function totalSemana(matriz){
    let semana= parseInt(prompt("Ingrese la semana: "));
    let sumaSemana=0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < 7; j++) {
            if((semana-1)==i){
                sumaSemana+= matriz[i][j];
            }       
        }
    }
    console.log(`~Total semana ${semana}: ${sumaSemana}`);
}

//total x dia especifico
function totalDia(matriz) {
    let sumaDia=0;
    let dia= parseInt(prompt("Ingrese el día: 1-Lun , 2-Mar , 3-Mie , 4-Jue , 5-Vie , 6-Sab, 7-Dom  "));
    let diaEnLetras;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < 7; j++) {
            if((dia-1)==j){
                sumaDia+= matriz[i][j];
            }            
        }        
    }
    diaEnLetras= pasarDiaALetra(dia);
    console.log(`~Total día ${diaEnLetras}: ${sumaDia}`);
}

//total mes
function totalMes(matriz) {
    let sumaMes=0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < 7; j++) {
            sumaMes+=matriz[i][j];            
        }

    }
    console.log("~Total del mes: " + sumaMes);
}

//semana con mas gasto
function semanaMayorGasto(matriz) {
    let semanaMayor=0;
    let aux=0;
    let numero=0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < 7; j++) {
            aux+=matriz[i][j];           
        }
        if(aux>semanaMayor){
            semanaMayor=aux;
            numero=i+1;
        }
        aux=0;
    }  
    console.log(`~La semana ${numero} fue la de mayor gasto.`);
}

//dia con mas gasto
function diaMayorGasto(matriz) {
    let diaMayor=0;
    let aux=0;
    let numero=0;
    let diaEnLetras;

    for (let j = 0; j < 7; j++) {
        for (let i = 0; i < matriz.length; i++) {
            aux+=matriz[i][j];           
        }
        if(aux>diaMayor){
            diaMayor=aux;
            numero=j+1;
        }
        aux=0;
    }  
    diaEnLetras= pasarDiaALetra(numero);
    console.log(`El dia ${diaEnLetras} fue el de mayor gasto.`);
}

//pasar nro a dia de la semana en letras
function pasarDiaALetra(dia) {
    switch (dia) {
        case 1:
            diaEnLetras="Lunes";
            break;
        case 2:
            diaEnLetras="Martes";
            break;
        case 3:
            diaEnLetras="Miércoles";
            break;
        case 4:
            diaEnLetras="Jueves";
            break;
        case 5:
            diaEnLetras="Viernes";
            break;
        case 6:
            diaEnLetras="Sábado";
            break;
        case 7:
            diaEnLetras="Domingo";
            break;
    }
    return diaEnLetras;
}

let matriz=[
    [],
    [],
    [],
    []
];

ingresarDatos(matriz);
totalSemana(matriz);
totalDia(matriz);
totalMes(matriz);
semanaMayorGasto(matriz);
diaMayorGasto(matriz);