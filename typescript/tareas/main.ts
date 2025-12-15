type tareas = {
    id: number;
    title: String;
    completed: boolean;
    createdAt: Date;
}
function crearTarea:(title: String): tareas {
    return {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date()
    };
}

const tarea1 = crearTarea("Aprender TypeScript");
console.log(tarea1);