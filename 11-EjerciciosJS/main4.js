 frasesFrikisInformatica = [
  "El café es el carburante de los programadores.",
  "Los comentarios en el código son como la higiene personal: todos dicen que es importante, pero pocos lo hacen realmente.",
  "La documentación es como el sexo: cuando es bueno, es muy bueno; cuando es malo, es mejor que nada.",
  "La comunicación en informática es como hablar con un programador: ¿Hablas inglés o código?",
  "La nube no es solo una moda, ¡es una forma de vida!",
  "La programación es como tocar un piano desafinado: solo lo entiende quien lo hace."
];
colores = [
  "#ff0000", // Rojo
  "#00ff00", // Verde
  "#0000ff", // Azul
  "#ff00ff", // Magenta
  "#00ffff", // Cyan
  "#ff8000", // Naranja
  "#8000ff", // Morado
  "#00ff80", // Verde claro
  "#ff0080", // Rosa
  "#80ff00", // Verde lima
  "#0080ff", // Azul claro
  "#ffbf00", // Amarillo oscuro
  "#bf00ff", // Violeta oscuro
  "#00ffbf", // Turquesa
  "#bf00ff", // Púrpura
  "#00bfff", // Azul claro
  "#ff00bf", // Magenta oscuro
  "#80ff80", // Verde claro pastel
  "#ff80ff", // Rosa pastel
  "#80ffff"  // Cian claro
];

function cambiarTexto(){
    const texto = document.getElementById('texto-informatica')
    var indice = Math.floor(Math.random() * frasesFrikisInformatica.length);
    var indiceColor = Math.floor(Math.random() * colores.length);
    texto.textContent = frasesFrikisInformatica[indice];
    texto.style.color = colores[indiceColor]
}

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("ver-mas-boton");
    boton.addEventListener('click', cambiarTexto);
})