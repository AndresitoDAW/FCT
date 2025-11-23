const box = document.getElementById("box");
const boton = document.getElementById("toggleBtn");

function toggleBox (){
    if (box.style.display === 'none'){
        box.style.display = 'block';
        boton.textContent = 'Ocultar caja';
    } else {
        box.style.display = 'none'
        boton.textContent = 'Mostrar caja';
    }
}

boton.addEventListener('click', toggleBox);