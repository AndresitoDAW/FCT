//Importar modulo express
const express = require('express');

//Creamos servidor
const app = express();

const taskRoutes = require('./routes/tasks.routes');

const errorHandler = require('./middlewares/errorHandler');
//Puerto
const PORT = 1234;

//Definimos la ruta con metodo get
/*app.get('/', (req, res) => {
    res.end('Servidor funcionando')
})*/

app.use(express.json());

// Servir frontend
app.use(express.static('public'));

//Conectar con las rutas de tareas
app.use('/api/tasks', taskRoutes);

// Manejo global de errores
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

});


