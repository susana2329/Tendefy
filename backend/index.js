const express = require('express');
const app = express();

const { getMongoDBConnection } = require('./database/conexion');

getMongoDBConnection();

app.listen(3000, () => {
    console.log("Servidor levantado");
});