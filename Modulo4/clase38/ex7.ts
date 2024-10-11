let example2 : {day: string} = {day: 'Monday'};
printMessage(example2.day);

example2.day= 'Tuesday';
printMessage(example2.day);

function printMessage(value:string) {
    let phrase = `Today is ${value}.`;
    console.log(phrase);
};