//------------------------------------------------------
/* function areaCirculo (radio){
    var resultado = Math.PI * (Math.pow(radio, 2))
    var resultado = resultado.toFixed(2)
    document.write("El area del ciruclo es: " + resultado + "<br>")
}
function perimetroCirculo (radio){
    var resultado = 2 * Math.PI * radio;
    var resultado = resultado.toFixed(2)
    document.write("El perimetro del ciruclo es: " + resultado + "<br>")
}

var numero = parseFloat(window.prompt("Introduzca el radio del circulo"));
areaCirculo(numero);
perimetroCirculo(numero); */

//------------------------------------------------------

do {
    var cantidad = parseInt(window.prompt("Ingrese la cantidad de numeros que va a introducir"))
    if (cantidad <= 0 || isNaN(cantidad)){
        alert("Porfavor, introduzca un numero positivo mayor a 0")
        var fallo = true
    } else {
        fallo = false;
    }
} while (fallo)

var arrayNum = [];
for (var i = 0; i < cantidad; i++){
    var numero = parseInt(window.prompt("Introduzca un numero"))
    arrayNum.push(numero);
}

function findLargesNumber (numbers){
    var mayor = numbers[0];
    for (var i = 1; i < numbers.length; i++){
        if (numbers[i] > mayor){
            mayor = numbers[i]
        }
        return mayor;
    }
}

var grande = findLargesNumber(arrayNum);
document.write("El numero mas grande es: " + grande)