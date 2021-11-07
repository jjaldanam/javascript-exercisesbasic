let arreglo = [];
do {
    let sigue = arreglo.length +1;
    let num = prompt("Ingrese un número ( el "+sigue+")");
    if(!isNaN(num) && num > 0){
        arreglo.push(num);
    }
}while ( arreglo.length < 6)


arreglo.sort((a,b)=>a-b);   // Organiza el arreglo de números


console.log(arreglo);

document.write("<H1>Arreglo de 6 núemros</H1>");
for (let numero of arreglo) {
    document.write("<P>Número almacenado: "+numero+"<BR />");
}

