const Task = require('../models/tasks.model');

exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.getAll();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

exports.createTask = async (req, res, next) => {
    try {
        const { title } = req.body;
        const newTask = await Task.create(title);
        res.status(201).json(newTask);
    } catch (err) {
        next(err);
    }
};

exports.toggleTask = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const updatedTask = await Task.toggle(id);
        if (!updatedTask) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.json(updatedTask);
    } catch (err) {
        next(err);
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        await Task.remove(id);
        res.json({ message: 'Tarea eliminada' });
    } catch (err) {
        next(err);
    }
};
