function crearTarea(title) {
    return {
        id: Date.now(),
        title: title,
        completed: false,
        createdAt: new Date()
    };
}
var tarea1 = crearTarea("Aprender TypeScript");
console.log(tarea1);
