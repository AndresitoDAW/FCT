const Task = require('../models/tasks.model');

// GET /api/tasks
exports.getTasks = (req, res) => {
    res.json(Task.getAll());
};

// POST /api/tasks
exports.createTask = (req, res) => {
    const { title } = req.body;
    const newTask = Task.create(title);
    res.status(201).json(newTask);
};

// PATCH /api/tasks/:id
exports.toggleTask = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = Task.toggle(id);
    res.json(updatedTask);
};

// DELETE /api/tasks/:id
exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    Task.remove(id);
    res.json({ message: "Tarea eliminada" });
};
