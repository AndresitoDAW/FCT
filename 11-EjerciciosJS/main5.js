document.addEventListener("DOMContentLoaded", function(){
    const boton = document.getElementById('addItemBtn');
    const lista = document.getElementById('itemsList');
    const nuevoProducto = document.getElementById("newItemInput");
    function agregarProducto (){
        var producto = nuevoProducto.value.trim();
        if (producto){

            const itemLista = document.createElement("li");
            itemLista.textContent = producto;

            const botonValidar = document.createElement('button');
            botonValidar.classList.add("completeBtn")
            botonValidar.textContent = "V"
            botonValidar.addEventListener("click", () => {
                itemLista.style.textDecoration = "line-through"; // marca como hecho
            })

            const botonBorrar = document.createElement("button");
            botonBorrar.classList.add("deleteBtn") 
            botonBorrar.textContent = "X";
            botonBorrar.addEventListener("click", () => {
                itemLista.remove();
                botonValidar.remove();
                botonBorrar.remove();
            });
            
            itemLista.appendChild(botonValidar);
            lista.appendChild(botonBorrar);

            lista.appendChild(itemLista);

            nuevoProducto.value = "";
        }   
    }

    boton.addEventListener("click", agregarProducto);
})