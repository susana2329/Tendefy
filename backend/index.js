const express = require('express');
const app = express();

const { getMongoDBConnection } = require('./database/conexion');
const usuarioRouter = require('./routes/usuario.routes');

app.use(express.json());
const usuarioRouter = require('./routes/usuario.router');
const spotifyRouter = require('./routes/spotify.routes');

app.use(express.json());
app.use('/api/usuarios', usuarioRouter);
app.use('/api', spotifyRouter);

getMongoDBConnection();

app.use('/api/usuarios', usuarioRouter);

app.listen(3000, () => {
    console.log("Servidor levantado");
});