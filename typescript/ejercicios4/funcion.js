function saludar(nombre, edad) {
    return "Hola ".concat(nombre, ", tienes ").concat(edad, " a\u00F1os");
}
var nombre = window.prompt("Ingresa tu nombre:");
var edad = Number(window.prompt("Ingresa tu edad:"));
console.log(saludar(nombre, edad));
