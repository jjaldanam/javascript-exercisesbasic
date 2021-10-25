NumeroA =prompt("Primer número a sumar: ");
NumeroA=parseFloat(NumeroA);     //Se debe pasar a entero, del prompt viene como String

NumeroB =prompt("Segundo número a sumar: ");
NumeroB=parseFloat(NumeroB);     //Se debe pasar a entero, del prompt viene como String

let resultado = NumeroA + NumeroB;

document.write("<h1>SUMA DE DOS NÚMEROS</h1>");
document.write("<p> La suma de los números "+NumeroA+" y "+NumeroB+"</p>");
document.write("<h1>es: "+resultado+" </h1>");
