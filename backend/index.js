const express = require('express');
const app = express();
const editProfileRouter = require(`./routes/editProfile.routes`)
const { getMongoDBConnection } = require('./database/conexion');

getMongoDBConnection();


app.put(`/spotify/perfil/edit`, editProfileRouter)

app.listen(3000, () => {
    console.log("Servidor levantado");
});