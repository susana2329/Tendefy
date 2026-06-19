const express = require('express');
const app = express();
const spotifyRouter = require('./routes/spotify.routes')
const matchingRouter = require('./routes/matching.routes')
const editProfileRouter = require(`./routes/editProfile.routes`)
const { getMongoDBConnection } = require('./database/conexion');
const likeRouter = require('./routes/likes.routes')
require('dotenv').config(); 

getMongoDBConnection();


app.use(express.json())

app.use('/auth',spotifyRouter)
app.use('/',spotifyRouter)
app.use('/',matchingRouter)
app.use('/', likeRouter)
app.use(`/spotify/perfil/edit`, editProfileRouter)


app.listen(3000, () => {
    console.log("Servidor levantado");
});