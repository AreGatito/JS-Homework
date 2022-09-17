//Saludo por función 
const nombre = "Arely Montoro Cecilio"
const age = 22
function saludo(){
    console.log(`Hola mi nombre es ${nombre} y tengo ${age} años`);
}
saludo()

console.log(`Función para encontrar el producto de dos numeros y dividirlo por uno tercero `)
const operation = function (a,b,c){
    return a*b/c;
}
console.log(operation(12,4,8));

//Función que cuenta hasta el numero asignado 
console.log(`Función que cuenta hasta cierto número`)

function counting() {
    let number =1, asigment=16;
    while(number<=asigment){
        console.log(number);
        number++
    }
}
counting()
