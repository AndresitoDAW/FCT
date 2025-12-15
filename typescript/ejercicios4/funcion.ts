function saludar(nombre: String, edad: Number): String {
    return `Hola ${nombre}, tienes ${edad} años`
;}

const nombre = window.prompt("Ingresa tu nombre:");
const edad = Number(window.prompt("Ingresa tu edad:"));

console.log(saludar(nombre, edad));