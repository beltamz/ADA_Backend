const fs = require('fs');

fs.readFile('data.json','utf8', (err,data)=>{
    if (err) {
        console.log(`Error al leer el archivo JSON: `, err);
        return;
    }

    console.log("Contenido del archivo JSON(Como texto):");
    console.log(data);
    
    const person= JSON.parse(data);
    person.age=35;

    const newJson= JSON.stringify(person, null, 2);

    fs.writeFile('newPerson.json' , newJson, (err)=>{
        if (err) {
            console.log(`Error al escribir el archivo JSON: `, err);
            return;
        }
        console.log("JSON modificado y guardado en newPerson.json");
        
    })
});