document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-nota");
    const input = document.getElementById("input-nota");
    const lista = document.getElementById("lista-notas");
    const mensajeError = document.getElementById("mensaje-error");
    let notas = JSON.parse(localStorage.getItem("notas")) || [];

    // Función para renderizar las notas
    function renderNotas() {
        lista.innerHTML = ""; // limpiar lista
        notas.forEach((nota, index) => {
            const li = document.createElement("li");
            li.textContent = nota;

            // Botón eliminar
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.classList.add("eliminar");
            btnEliminar.addEventListener("click", () => {
                notas.splice(index, 1);
                localStorage.setItem("notas", JSON.stringify(notas));
                renderNotas();
            });

            li.appendChild(btnEliminar);
            lista.appendChild(li);
        });
    }

    // Render inicial
    renderNotas();

    // Manejo del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const texto = input.value.trim();
        if (texto !== "") {
            notas.push(texto);
            localStorage.setItem("notas", JSON.stringify(notas));
            input.value = "";
            mensajeError.innerHTML = "";
            renderNotas();
        } else {
            input.focus();
            mensajeError.innerHTML = "No puede dejar este campo vacío";
        }
    });
});
