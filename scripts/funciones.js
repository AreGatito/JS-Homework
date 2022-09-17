//Saludo por función 
function saludo(){
    console.log(`Hola mi nombre es Arely Montoro Cecilio y tengo 22 años`);
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
    let number =1;
    while(number<=13){
        console.log(number);
        number++
    }
}
counting()
