const db = require('../database/db');

// Obtener todas las tareas
exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM tasks');
    return rows;
};

// Crear una tarea
exports.create = async (title) => {
    const [result] = await db.query(
        'INSERT INTO tasks (title, completed) VALUES (?, ?)',
        [title, false]
    );

    return {
        id: result.insertId,
        title,
        completed: false
    };
};

// Alternar completado
exports.toggle = async (id) => {
    // Obtenemos la tarea actual
    const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
    const task = rows[0];
    if (!task) return null;

    const newCompleted = !task.completed;

    await db.query(
        'UPDATE tasks SET completed = ? WHERE id = ?',
        [newCompleted, id]
    );

    return { ...task, completed: newCompleted };
};

// Eliminar tarea
exports.remove = async (id) => {
    await db.query('DELETE FROM tasks WHERE id = ?', [id]);
};
