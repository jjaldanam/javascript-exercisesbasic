var numeros = []


do{
    NumeroA =prompt("Sumar número o negativo para terminar: ");
    NumeroA=parseFloat(NumeroA);

    if (!isNaN(NumeroA) && NumeroA > 0){
        numeros.push(NumeroA);
        let cantidadNumeros=numeros.length;
        let acumulador = 0;
        for(let i of numeros) acumulador+=i;
        let media = acumulador / cantidadNumeros;
        document.write("<p> Numero ingresado: "+NumeroA+"<br />");
        document.write("Cantidad de números: "+cantidadNumeros+"<br />");
        document.write("Sumatoria: "+acumulador+"<br />");
        document.write("Media: "+media+"</p>");

    }


}while (isNaN(NumeroA) ||NumeroA >= 0);


