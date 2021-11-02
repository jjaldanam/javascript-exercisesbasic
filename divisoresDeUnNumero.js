// 6. Muestre todos los números divisores de un número, ingresado desde el prompt.
// Ejemplo: https://es.stackoverflow.com/questions/265217/divisores-propios-de-un-numero-en-javascript

do{
    NumeroA =prompt("Divisores del número:  ");
}while (isNaN(NumeroA) || NumeroA <= 0);

console.log("Los divisores de ", NumeroA);
var numeros;
for (numeros=2;numeros < NumeroA/2; numeros++) {
    if (NumeroA % numeros === 0) {
        console.log(numeros, " lo divide ");
    }
}
