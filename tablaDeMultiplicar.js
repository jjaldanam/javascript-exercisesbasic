/* Imprimir tabla de multiplicar */

let NumeroA = 0;

do{
    NumeroA =prompt("Ingrese un número a Multiplicar: ");
}while (isNaN(NumeroA) || NumeroA <= 0);

NumeroA = parseFloat(NumeroA);

for(let i=1; i <= 10; i++){
    let resultado = i * NumeroA;
    console.log(NumeroA+' x ',i," = ",resultado);
}
