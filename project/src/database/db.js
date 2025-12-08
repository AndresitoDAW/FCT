const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',       // cámbialo si tu usuario es otro
    password: '',       // pon tu contraseña si tienes
    database: 'tasksdb'
});

module.exports = pool;
