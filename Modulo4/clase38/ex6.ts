let example : unknown;
example= 'Octubre';
dataProcess(example);
example= 30;
dataProcess(example);
example= true;
dataProcess(example);
example= null;
dataProcess(example);
example= undefined;
dataProcess(example);


function dataProcess(value:any){
    if(typeof value=== 'string'){
        console.log("El valor es una cadena");
    }else if(typeof value==='number'){
        console.log('El valor es un numero');
    }else if(typeof value==='boolean'){
        console.log('El valor es un booleano');
    }else if( value===null || value===undefined){
        console.log(`El valor es: ${value}`);
    };
};