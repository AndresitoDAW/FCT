let tasks = [
    { id: 1, title: "Aprender NodeJS", completed: false },
    { id: 2, title: "Crear mi primer API", completed: true}
];

let nextId = 3;

// Obtener tareas
exports.getAll = () => {
    return tasks;
};

// Crear una nueva tarea
exports.create = (title) => {
    const newTask = {
        id: nextId++,
        title,
        completed: false
    };
    tasks.push(newTask);
    return newTask;
}

// Cambiar estado de una tarea
exports.toggle = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
    }
    return task;
}

// Elimianr una tarea
exports.remove = (id) => {
    tasks = tasks.filter(t => t.id !== id);
};