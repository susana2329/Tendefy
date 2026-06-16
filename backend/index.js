const express = require('express');
const app = express();
const spotifyRouter = require('./routes/spotify.routes')
const router = express.Router()

const { getMongoDBConnection } = require('./database/conexion');

getMongoDBConnection();

app.use('/auth',spotifyRouter)

app.listen(3000, () => {
    console.log("Servidor levantado");
});