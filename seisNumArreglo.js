let arreglo = [];
do {
    let sigue = arreglo.length +1;
    let num = prompt("Ingrese un número ( el "+sigue+")");
    if(!isNaN(num) && num > 0){
        arreglo.push(num);
    }
    console.log(num);
    console.log(sigue);
    console.log(arreglo);
}while ( arreglo.length < 6)
// }while ((Num <= 0 || isNaN(Num)) && arreglo.length < 6)