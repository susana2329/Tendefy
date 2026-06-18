const express = require('express');
const app = express();
const spotifyRouter = require('./routes/spotify.routes')
const router = express.Router()
const matchingRouter = require('./routes/matching.routes')
const { getMongoDBConnection } = require('./database/conexion');
const likeRouter = require('./routes/likes.routes')

getMongoDBConnection();

app.use(express.json())

app.use('/auth',spotifyRouter)
app.use('/',spotifyRouter)
app.use('/',matchingRouter)
app.use('/', likeRouter)

app.listen(3000, () => {
    console.log("Servidor levantado");
});