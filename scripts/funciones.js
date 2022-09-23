//Saludo por función
const saludo =(name,age) =>{
    console.log(`Hola mi nombre es ${name} y tengo ${age} años`);
}
saludo("Arely",22)

console.log(`Función para encontrar el producto de dos numeros y dividirlo por uno tercero `)
const operation = function (a,b,c){
    return a*b/c;
}
console.log(operation(12,4,8));

//Función que cuenta hasta el numero asignado 
console.log(`Función que cuenta hasta cierto número`)

const counter = (number) => {
    for (i=1;i<=number;i++){
        console.log(i);
    }
}
counter(6);
