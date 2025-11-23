const nuevaTarea = document.getElementById("newTaskInput");
const listaTarea = document.getElementById("taskList");

function añadirTarea(){
    textoTarea = nuevaTarea.value
    if (textoTarea){
        const itemTarea = document.createElement("li");
        itemTarea.textContent = textoTarea;
        const botonBorrar = document.createElement('button');
        botonBorrar.textContent = "X";
        botonBorrar.classList.add("deleteBtn");
        listaTarea.appendChild(botonBorrar);
        listaTarea.appendChild(itemTarea);
        botonBorrar.addEventListener("click", () => {
            itemTarea.remove();
            botonBorrar.remove();
        });
        nuevaTarea.value = "";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const boton = document.getElementById("addTaskBtn");
    boton.addEventListener("click", añadirTarea);
})

