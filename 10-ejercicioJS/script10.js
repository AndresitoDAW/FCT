document.addEventListener ("DOMContentLoaded", () =>{
    //Seleccionamos elementos
    const botonAgregar = document.getElementById("addBtn");
    const inputTexto = document.getElementById("inputName");
    const lista = document.getElementById("nameList");
    const botonRandom = document.getElementById("randomBtn");
    let nombres = [];

    function renderNames (){
        lista.innerHTML = "";
        nombres.forEach(texto => {
            const itemLista = document.createElement('li');
            itemLista.textContent = texto;
            lista.appendChild(itemLista);
        })
    }
    function agregarNombre(){
        const texto = inputTexto.value.trim();
        if (texto !== ""){
            nombres.push(texto);
            renderNames();
            inputTexto.value = "";
            inputTexto.focus();
        }
    }

    function aleatorio (){
        if (nombres.length > 0){
            const randomIndex = Math.floor(Math.random() * nombres.length);
            const seleccionarNombre = nombres[randomIndex];
            const seleccionarItemLista = lista.childNodes[randomIndex];
            seleccionarItemLista.classList.add('selected');
            seleccionarNombre.textContent += `- se ha elegido: ${seleccionarNombre}`;  
        } 
    }

    botonAgregar.addEventListener('click', agregarNombre);
    botonRandom.addEventListener('click', aleatorio);
})