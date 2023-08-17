const express = require('express');
const app = express();
const sql = require('mssql');
const config = require('./config'); // Importa la configuración de la conexión

// Middleware para convertir el cuerpo de la solicitud en JSON
app.use(express.json());

// Ruta para obtener datos desde la base de datos
app.get('/obtenerDatos', async (req, res) => {
    try {
        // Establece una conexión desde el pool
        const pool = await sql.connect(config);

        // Consulta SQL para obtener datos (reemplaza esto con tu consulta real)
        const result = await pool.request().query('SELECT * FROM Prueba');

        res.json(result.recordset);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).send('Error al obtener datos desde la base de datos.');
    }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

//Si presentas algun fallo puedes colocar mensajes en el codigo con 
//console.log('Mensaje') para detectar el error como yo lo hice.
