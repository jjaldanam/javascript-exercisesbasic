do{

    do{
        NumeroA =prompt("Números impares entre dos números - Primer número con que inicia el rango: ");
    }while (isNaN(NumeroA) || NumeroA <= 0);

    do{
        NumeroB =prompt("Segundo número con que finaliza el rango: ");
    }while (isNaN(NumeroB) || NumeroB <= 0)

    NumeroA=parseFloat(NumeroA);     //Se debe pasar a entero, del prompt viene como String
    NumeroB=parseFloat(NumeroB);     //Se debe pasar a entero, del prompt viene como String

    if (NumeroA > NumeroB) alert("El primer número debe ser menor que el segundo número!");

}while (NumeroA > NumeroB);

console.log("impares entre",NumeroA+" y "+NumeroB+"<br />");


for(let i=NumeroA; i <= NumeroB; i++){

    if (i % 2 == 1){
        console.log(i);
        document.write(i+"<br/>");
    }
}