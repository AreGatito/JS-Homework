//Ciclo deletreando mi nombre con FOR y MAP
console.log(`Nombre deletreado por FOR`) 
const letras = ["A","r","e","l","y"];

for (i=0; i<=letras.length; i++) {
    console.log(letras[i]);
}

console.log(`Nombre deletreado por MAP`)

letras.map(letra=> {
    console.log(letra);
})


console.log(`Ciclo while del 1 al 8`)
let x=1
while (x<=8){
    console.log(x);
    x++
}

//SWITCH
console.log(`Switch para estaciones`)
const season= "Invierno";
switch(season){
    case"Primavera":
        console.log("Energia, felicidad y luz");
        break
    case"Verano":
        console.log("Diversión,juegos y fiesta");
        break
    case"Otoño":
        console.log("Melancolia");
        break
    case "Invierno":
        console.log("Frialdad,soledad y misterio");
        break
}