//Creamos el objeto edificio
function Edificio (calle, numero, cp){
    this.calle = calle;
    this.numero = numero;
    this.cp = cp;
    this.propietarios = {};

    document.write ("Construido nuevo edificio en calle : " + this.calle + ", numero: " + this.numero + ", CP: " + this.cp + "<br>");

    Edificio.prototype.agregarPlantasYPuertas = function (numPlantas, puertas){
        this.numPlantas = numPlantas;
        this.puertas = puertas;
    }

    Edificio.prototype.agregarPropietario = function (nombre, planta, puerta){
        if (!this.propietarios[planta]){
            this.propietarios[planta] = {};
        }
        this.propietarios[planta][puerta] = nombre;
        document.write(nombre + " es ahora el propietario de la puerta: " + puerta + " de la planta: " + planta + "<br>");
    }

    Edificio.prototype.imprimirPlantas = function() {
        for (let planta in this.propietarios) {
            document.write(`Planta ${planta}:<br>`);
            for (let puerta in this.propietarios[planta]) {
                let nombre = this.propietarios[planta][puerta];
                document.write(`&nbsp;&nbsp;Puerta ${puerta}: ${nombre}<br>`);
            }
        }
    }

    this.modificarNumero = function (numero){
        this.numero = numero;
    }
    this.modificarCalle = function (calle){
        this.calle = calle;
    }
    this.modificarCP = function (cp){
        this.cp = cp;
    }
    this.imprimirCalle = function (){
        return calle
    }
    this.imprimirNumero = function (){
        return numero
    }
    this.imprimirCP = function (){
        return cp
    }
}

let edificioA = new Edificio ("Calle Falsa", 123, "28080");
let edificioB = new Edificio ("Calle cierta", 456, "28085");
let edificioC = new Edificio ("Calle Amargura", 789, "28090");

edificioA.agregarPlantasYPuertas (2, 3);
edificioA.agregarPropietario ("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario ("Maria Garcia", 1, 2);
edificioA.agregarPropietario ("Luis Martinez", 1, 3);
edificioA.agregarPropietario ("Ana Fernandez", 2, 2);

document.write("<h4><br>Propietarios del edificio de " + edificioA.imprimirCalle() + " numero " + edificioA.imprimirNumero() +"<br></h4>");

edificioA.imprimirPlantas();

edificioA.agregarPlantasYPuertas (3, 3);
edificioA.agregarPropietario ("Carlos Sanchez", 3, 3);

document.write("<h4><br>Propietarios del edificio de " + edificioA.imprimirCalle() + " numero " + edificioA.imprimirNumero() +"<br></h4>");
edificioA.imprimirPlantas();