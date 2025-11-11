var cifra = "";
var acumulado = 0;
var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;
var primera_operacion = true;

function displayNumbers (number){
    document.getElementById("display").value = cifra + number;
    cifra = document.getElementById("display").value;
}

function suma (){
    if(restar){
        acumulado = acumulado - parseInt(cifra);
        document.getElementById("display").value=acumulado;
    } else if (multiplicar){
        acumulado = acumulado * parseInt(cifra);
        document.getElementById("display").value=acumulado;
        } else {
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value=acumulado;
        }
    
    cifra = "";
    restar = false;
    sumar = true;
    multiplicar = false;
    primera_operacion = false;
}

function resta (){
    if (primera_operacion == false){
        if(sumar){
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value=acumulado;
        } else if (multiplicar){
            acumulado = acumulado * parseInt(cifra);
            document.getElementById("display").value=acumulado;
        } else {
             acumulado = acumulado - parseInt(cifra);
             document.getElementById("display").value=acumulado;
            }
    } else {
        acumulado = parseInt(cifra);
        
    }
    cifra = "";
    sumar = false;
    restar = true;
    multiplicar = false;
    primera_operacion = false;
    
}

function multiplicacion (){
    if(sumar){
        acumulado = acumulado + parseInt(cifra);
        document.getElementById("display").value=acumulado;
    } else if (restar){
        acumulado = acumulado - parseInt(cifra);
        document.getElementById("display").value=acumulado;
    } else {
        acumulado = acumulado * parseInt(cifra);
        document.getElementById("display").value=acumulado;
    }
    cifra = "";
    sumar = false;
    restar = false;
    multiplicar = true;
    primera_operacion = false;
}

function division (){

}

function resultado (){
    if (sumar){
        document.getElementById("display").value = acumulado + parseInt(cifra);
    } else if (restar){
        document.getElementById("display").value = acumulado - parseInt(cifra);
    } else if (multiplicar){
        document.getElementById("display").value = acumulado * parseInt(cifra);
    }

    acumulado = parseInt(document.getElementById("display").value);
    cifra=0;
}