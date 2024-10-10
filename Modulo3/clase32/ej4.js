const readLineSync= require('readline-sync');

const numberList=[];

readLineSync.promptCLLoop(()=>{
    let usersAns= readLineSync.questionInt("Ingrese un numero: ");
    numberList.push(usersAns);
    const repetir= readLineSync.keyInYN('Desea agregar otro numero?');
    return !repetir;
});

numberList.sort((a,b)=> b-a);

console.log(numberList);