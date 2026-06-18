const express = require('express');
const app = express();

const { getMongoDBConnection } = require('./database/conexion');
const usuarioRouter = require('./routes/usuario.routes');

app.use(express.json());

getMongoDBConnection();

app.use('/api/usuarios', usuarioRouter);

app.listen(3000, () => {
    console.log("Servidor levantado");
});