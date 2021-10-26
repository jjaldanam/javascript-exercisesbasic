NumeroA =prompt("Primer número a Comparar: ");
NumeroA=parseFloat(NumeroA);     //Se debe pasar a entero, del prompt viene como String

NumeroB =prompt("Segundo número a comparar: ");
NumeroB=parseFloat(NumeroB);     //Se debe pasar a entero, del prompt viene como String

let resultado = "0";

if (NumeroA > NumeroB)
    resultado = "El mayor es: "+NumeroA;
else if(NumeroA < NumeroB)
    resultado = "El mayor es: "+NumeroB;
else
    resultado = "Los dos números son iguales ";



document.write("<h1>COMPARANDO DOS NÚMEROS</h1>");
document.write("<p> Al comparar los dos números "+NumeroA+" y "+NumeroB+"</p>");
document.write("<h1>Resultado ==>> "+resultado+" </h1>");
