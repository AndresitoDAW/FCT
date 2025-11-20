document.addEventListener("DOMContentLoaded", () => {
    console.log("El documento esta listo");

    const carrito = document.querySelector('.lateral');
    const listaCarrito = carrito.querySelector('ul');
    const totalCarrito = carrito.querySelector('p strong');
    const vaciarBtn = carrito.querySelector('button');
    const botones = document.querySelectorAll('.botones-articulo');

    let total = 0;

     // Función para añadir producto
    botones.forEach(boton => {
    boton.addEventListener('click', () => {
    const articulo = boton.parentElement;
    const nombre = articulo.querySelector('.nombre')?.textContent || articulo.querySelector('p').textContent;
    const precio = articulo.querySelector('.precio')?.textContent || articulo.querySelectorAll('p')[1].textContent;

    // Crear elemento en el carrito
    const li = document.createElement('li');
    li.textContent = `${nombre} - ${precio}`;
    listaCarrito.appendChild(li);

    // Actualizar total
    total += parseFloat(precio.replace(',', '.').replace('€',''));
    totalCarrito.textContent = `Total: ${total.toFixed(2)}€`;

    // Mostrar carrito
    carrito.style.display = 'block';
    });
  });

  // Vaciar carrito
    vaciarBtn.addEventListener('click', () => {
    listaCarrito.innerHTML = '';
    total = 0;
    totalCarrito.textContent = 'Total:';
    carrito.style.display = 'none';
  });
});

