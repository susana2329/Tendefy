const express = require('express');
const app = express();
const editProfileRouter = require(`./routes/editProfile.routes`)
const { getMongoDBConnection } = require('./database/conexion');
const usuarioRouter = require('./routes/usuario.routes');
const usuarioRouter = require('./routes/usuario.router');
const spotifyRouter = require('./routes/spotify.routes');

getMongoDBConnection();

app.use(express.json());

app.use('/api/usuarios', usuarioRouter);
app.use('/api/usuarios', usuarioRouter);


app.use(`/spotify/perfil/edit`, editProfileRouter)
app.use('/api', spotifyRouter);


app.listen(3000, () => {
    console.log("Servidor levantado");
});