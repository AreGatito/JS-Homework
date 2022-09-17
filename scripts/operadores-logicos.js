let a= 8, b=4, c=2, d=a;

//b es mayor que d
if(b>d){
    console.log("Si es mayor que d");
} else{ 
    console.log("No es mayor que d");
}

//c es menor que b
if(c<b){
    console.log("Si es menor que b");
} else{
    console.log("No es menor que b");
}

//b*c es mayor o igual a a
if(b*c>=a){
    console.log(true);
} else{
    console.log(false);
}

//a/c es igual a b 
if(a/c===b){
    console.log("Si es igual a B");
} else{
    console.log("No es igual a B");
}

//b esta en el intervalo c y a
if(b>c && b<a){
    console.log("Se encuentra dentro del intervalo");
} else{
    console.log("No se encuentra dentro del intervalo");
}