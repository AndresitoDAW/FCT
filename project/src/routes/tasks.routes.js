const express = require('express');
const router = express.Router();
const controller = require('../controllers/tasks.controller');
const validateTask = require('../middlewares/validateTask');

// GET todas las tareas
router.get('/', controller.getTasks);

// POST crear tarea
router.post('/', validateTask, controller.createTask);

// PATCH cambiar estado
router.patch('/:id', controller.toggleTask);

// DELETE eliminar tarea
router.delete('/:id', controller.deleteTask);

module.exports = router;
