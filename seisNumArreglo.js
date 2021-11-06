let arreglo = [];
do {
    let sigue = arreglo.length +1;
    let num = prompt("Ingrese un número ( el "+sigue+")");
    if(!isNaN(num) && num > 0){
        arreglo.push(num);
    }
}while ( arreglo.length < 6)

console.log(arreglo);