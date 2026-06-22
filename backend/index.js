const express = require('express');
const app = express();
const spotifyRouter = require('./routes/spotify.routes')
const matchingRouter = require('./routes/matching.routes')
const editProfileRouter = require(`./routes/editProfile.routes`)
const { getMongoDBConnection } = require('./database/conexion');
//const usuarioRouter = require('./routes/usuario.routes');
const usuarioRouter = require('./routes/usuario.router');
const likeRouter = require('./routes/likes.routes')
const logger = require('./utils/logger')
require('dotenv').config({path: './backend/.env',quiet:true})
const cors = require('cors')
getMongoDBConnection();

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    const start = Date.now()

    res.on('finish', () => {
        logger.debug(
            `${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - start}ms`
        )
    })

    next()
})

app.use('/auth',spotifyRouter)
app.use('/',spotifyRouter)
app.use('/',matchingRouter)
app.use('/', likeRouter)
app.use('/api/usuarios', usuarioRouter);
app.use(`/perfil/edit`, editProfileRouter)
app.use('/api', spotifyRouter);

logger.startup()

app.listen(process.env.PORT, () => {
    logger.server(`Escuchando en puerto ${process.env.PORT}`)
})
