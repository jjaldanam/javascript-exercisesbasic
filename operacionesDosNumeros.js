/*
9) pedir dos numeros y sumar, restar, multplicar y dividir.
Mostrarlos en la página, con un alert y por consola
 */

function sumar(x,y){
    return x+y;
}

function restar(x,y){
    return x-y;
}

function multiplicar(x,y){
    return x*y;
}

function dividir(x,y){
    return x/y;
}

let NumeroA, NumeroB;

do{
    NumeroA =prompt("Primer número a operar: ");
}while (isNaN(NumeroA) || NumeroA <= 0);

do{
    NumeroB =prompt("Segundo número a operar: ");
}while (isNaN(NumeroB) || NumeroB <= 0);

let suma, resta, multiplicacion, division;


NumeroA = parseInt(NumeroA);
NumeroB = parseInt(NumeroB);

suma = sumar(NumeroA,NumeroB);  // si no se parseInt, queda como concatenación de texto ej:  8+4  = 84
resta = restar(NumeroA,NumeroB);
multiplicacion = multiplicar(NumeroA,NumeroB);
division = dividir(NumeroA,NumeroB);

document.write("<H1>Primer Número: "+NumeroA+" y segundo Número: "+NumeroB+"</H1><br />");
document.write("La suma de los dos Números es: "+suma+"<br />");
document.write("La resta de los dos Números es: "+resta+"<br />");
document.write("La multiplicación de los dos Números es: "+multiplicacion+"<br />");
document.write("La división de los dos Números es: "+division+"<br />");

alert("La suma de "+NumeroA+" y "+NumeroB+" es: "+suma);
alert("La resta de "+NumeroA+" y "+NumeroB+" es: "+resta);
alert("La multiplicación de "+NumeroA+" y "+NumeroB+" es: "+multiplicacion);
alert("La división de "+NumeroA+" y "+NumeroB+" es: "+division);

console.log("Operaciones con ",NumeroA," y ",NumeroB);
console.log("Suma ",suma);
console.log("Resta ",resta);
console.log("Multiplicación ",multiplicacion);
console.log("División ", division);




