/* Identifica si un número es Par o Impar */

let NumeroA = 0;

do{
    NumeroA =prompt("Ingrese un número: ");
}while (isNaN(NumeroA) || NumeroA <= 0);

NumeroA = parseFloat(NumeroA);

if (NumeroA % 2 === 1){
    console.log(NumeroA," Es impar.");
}else{
    console.log(NumeroA," Es Par.")
}
