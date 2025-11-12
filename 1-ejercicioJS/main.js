/*Enunciado.
Realizar una pequeña aplicación en JavaScript que solicite un número del uno al diez y muestre la tabla de la operación correspondiente para ese número teniendo en cuenta lo siguiente:
•	Si se introduce un número que no esté entre el uno y el diez u otra información se mostrará un mensaje indicando que no se puede mostrar la tabla para ese número.
•	Si se introduce el número 2 el 4 o el 8 se realizará la tabla de multiplicar usando un bucle for y los operadores aritméticos de bits recordando que cuando desplazamos 1 bit a la derecha dividimos un entero por 2 y cuando lo desplazamos a la izquierda estamos multiplicando por 2.
•	Si se introduce el 3 el 6 o el 9 se realizará la tabla de sumar usando un bucle while
•	En otro caso se realizará la tabla de dividir utilizando un bucle do...while
 */
//Variables
let numIncorrecto = true;
const numMinimo = 1;
const numMaximo = 10;
const mensajeError = "ERROR, no has introducido un numero entre 1 y 10";
let numero;

//Bucle para pedir numero al usuario, si no introduce numero correcto de vuelve a solicitar
while (numIncorrecto) {
    numero = parseInt(prompt("Ingrese un número del 1 al 10:"));

    if (numero < numMinimo || numero > numMaximo || isNaN(numero)) {
        alert(mensajeError);
    } else{
        numIncorrecto = false;
    }
}
let contador = 1;
//Segun el numero introducido se realiza una operacion u otra
if (numero == 2 || numero == 4 || numero == 8) {
    desplazamiento = 0;
    switch(numero){
        case 2:
            desplazamiento = 1;
        break;
        case 4:
            desplazamiento = 2;
        break;
        default:
            desplazamiento = 3;      
    }
    document.write(`<h2>Tabla de multiplicar del ${numero}</h2>`);
    document.write("<p>Usando bucle for y operadores de bits</p>");
    for (contador; contador <= 10; contador++) {
        let resultado = contador << desplazamiento;
        document.write(`${numero} x ${contador} = ${resultado} <br>`);
    }
} else if (numero % 3 == 0){
    document.write(`<h2>Tabla de sumar del ${numero}</h2>`);
    document.write("<p>Usando bucle while</p>");
    while(contador <=10){
        let resultado = numero + contador;
        document.write(numero + "+" + contador + "=" + resultado + "<br>")
        contador++;
    }
} else {
    document.write(`<h2>Tabla de dividir del ${numero}</h2>`);
    document.write("<p>Usando bucle do...while</p>");
    do {
        let resultado = numero / contador;
        document.write(numero + "/" + contador + "=" + resultado + "<br>")
        contador++;
    } while (contador <= 10);
}
