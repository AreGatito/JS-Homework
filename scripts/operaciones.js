let nombre, age, x, y;
nombre= "Arely Montoro Cecilio";
age=23;
x=17;
y=12;

//versión por concatenación
console.log("Hola mi nombre es "+nombre,"y tengo "+age);

//versión con strings literales 
console.log(`Hola mi nombre es ${nombre} y tengo ${age} años`);

//Suma 
const suma= x+y;
console.log("La suma es: "+suma);
 
//Resta
const resta= x-y;
console.log(`La resta es: ${resta}`);
const segundaresta= y-x;
console.log(`La segunda versión de la resta es ${segundaresta}`);

//Multiplicación
const multipliacion= x*y;
console.log("La multiplicación es "+multipliacion);

//División
const division= x/y;
console.log(`La división es ${division}`);
const segundadivision= y/x;
console.log(`La segunda división o forma contraria es ${segundadivision}`);

//Potenciación
const potencia= x**2;
console.log("La potencia es "+potencia);

const potencia1= y**2;
console.log(`La potencia es ${potencia1}`);

const potencia2= y**x;
console.log(`La potencia es ${potencia2}`);

//Modulo
const residuo1= x%y;
console.log("El residuo es "+residuo1);

const residuo2= y%x;
console.log(`El residuo es ${residuo2}`);


//Punto extra 
let w=4, z=12;
const sumap= w+z;
console.log(sumap);

const raiz= sumap**0.5;
console.log("La Raiz cuadrada es "+raiz);
