const { getMongoDBConnection } = require('./database/conexion');
const Usuario = require('./repository/model/usuario');
require('dotenv').config();
const mongoose = require('mongoose');

const usuariosMock = [
{
    spotifyId: "mock_001",
    nombre: "Rodtang",
    edad: 28,
    ubicacion: "Buenos Aires",
    avatarUrl: "https://i.pravatar.cc/300?img=11",
    descripcion: "Peleador de Muay Thai, amante del rock y del café ☕",
    topArtists: [
        {
            nombre: "Airbag",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Airbag_2022.jpg"
        },
        {
            nombre: "Linkin Park",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Linkin_Park_2014.jpg"
        },
        {
            nombre: "Slipknot",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Slipknot_-_Rock_am_Ring_2019.jpg"
        },
        {
            nombre: "Megadeth",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Megadeth_2018.jpg"
        }
    ],
     topTracks: [
        { titulo: "Anarquía en Buenos Aires", artista: "Airbag", coverUrl: "https://picsum.photos/200?1" },
        { titulo: "Numb", artista: "Linkin Park", coverUrl: "https://picsum.photos/200?2" },
        { titulo: "Duality", artista: "Slipknot", coverUrl: "https://picsum.photos/200?3" },
        { titulo: "Symphony of Destruction", artista: "Megadeth", coverUrl: "https://picsum.photos/200?4" },
        { titulo: "Down with the Sickness", artista: "Disturbed", coverUrl: "https://picsum.photos/200?5" }
    ],
    redes: {
        instagram: "https://instagram.com/rodtang",
        spotify: "https://open.spotify.com/"
    }
},

{
    spotifyId: "mock_002",
    nombre: "Camila",
    edad: 24,
    ubicacion: "Córdoba",
    avatarUrl: "https://i.pravatar.cc/300?img=5",
    descripcion: "Amante del indie y del pop ",
    topArtists: [
        {
            nombre: "Doja Cat",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Doja_Cat_2021.jpg"
        },
        {
            nombre: "Tame Impala",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Kevin_Parker_2019.jpg"
        },
        {
            nombre: "The 1975",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/The_1975_2014.jpg"
        },
        {
            nombre: "Mac DeMarco",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/Mac_DeMarco_2019.jpg"
        }
    ],
     topTracks: [
        { titulo: "Paint The Town Red", artista: "Doja Cat", coverUrl: "https://picsum.photos/200?6" },
        { titulo: "The Less I Know The Better", artista: "Tame Impala", coverUrl: "https://picsum.photos/200?7" },
        { titulo: "Chocolate", artista: "The 1975", coverUrl: "https://picsum.photos/200?8" },
        { titulo: "Sweater Weather", artista: "The Neighbourhood", coverUrl: "https://picsum.photos/200?9" },
        { titulo: "Somebody Else", artista: "The 1975", coverUrl: "https://picsum.photos/200?10" }
    ],
    redes: {
        instagram: "https://instagram.com/rodtang",
        instagram: "https://instagram.com/camila"
    }
},

{
    spotifyId: "mock_003",
    nombre: "Tomás",
    edad: 27,
    ubicacion: "Rosario",
    avatarUrl: "https://i.pravatar.cc/300?img=12",
    descripcion: "Programador de día, baterista de noche 😈",
    topArtists: [
        {
            nombre: "Red Hot Chili Peppers",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/RHCP_2016.jpg"
        },
        {
            nombre: "Foo Fighters",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Foo_Fighters_2018.jpg"
        },
        {
            nombre: "Queens Of The Stone Age",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/QOTSA_2018.jpg"
        },
        {
            nombre: "Airbag",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Airbag_2022.jpg"
        }
    ],
     topTracks: [
        { titulo: "Californication", artista: "RHCP", coverUrl: "https://picsum.photos/200?11" },
        { titulo: "Everlong", artista: "Foo Fighters", coverUrl: "https://picsum.photos/200?12" },
        { titulo: "Reptile", artista: "Airbag", coverUrl: "https://picsum.photos/200?13" },
        { titulo: "Best Of You", artista: "Foo Fighters", coverUrl: "https://picsum.photos/200?14" },
        { titulo: "No One Knows", artista: "QOTSA", coverUrl: "https://picsum.photos/200?15" }
    ],
    redes: {
        instagram: "https://instagram.com/rodtang",
        spotify: "https://open.spotify.com/"
    }
},

{
    spotifyId: "mock_004",
    nombre: "Valentina",
    edad: 23,
    ubicacion: "Mendoza",
    avatarUrl: "https://i.pravatar.cc/300?img=9",
    descripcion: "Bailarina y fan del reggaeton ",
    topArtists: [
        {
            nombre: "Bad Bunny",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bad_Bunny_2019.jpg"
        },
        {
            nombre: "Karol G",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Karol_G_2022.jpg"
        },
        {
            nombre: "María Becerra",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Maria_Becerra_2022.jpg"
        },
        {
            nombre: "Emilia",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Emilia_Mernes_2023.jpg"
        }
    ],
    topTracks: [
        { titulo: "Tusa", artista: "Karol G", coverUrl: "https://picsum.photos/200?16" },
        { titulo: "Automático", artista: "María Becerra", coverUrl: "https://picsum.photos/200?17" },
        { titulo: "La Original", artista: "Emilia", coverUrl: "https://picsum.photos/200?18" },
        { titulo: "Tití Me Preguntó", artista: "Bad Bunny", coverUrl: "https://picsum.photos/200?19" },
        { titulo: "Provenza", artista: "Karol G", coverUrl: "https://picsum.photos/200?20" }
    ],
    redes: {
        instagram: "https://instagram.com/rodtang",
        instagram: "https://instagram.com/valentina"
    }
},

{
    spotifyId: "mock_005",
    nombre: "Lucas",
    edad: 30,
    ubicacion: "Buenos Aires",
    avatarUrl: "https://i.pravatar.cc/300?img=14",
    descripcion: "Escucho de todo, pero el cuarteto nunca falla ",
    topArtists: [
        {
            nombre: "Nene Malo",
            imagenUrl: "https://picsum.photos/300?21"
        },
        {
            nombre: "Roman El Original",
            imagenUrl: "https://picsum.photos/300?22"
        },
        {
            nombre: "La Konga",
            imagenUrl: "https://picsum.photos/300?23"
        },
        {
            nombre: "Luck Ra",
            imagenUrl: "https://picsum.photos/300?24"
        }
    ],
    topTracks: [
        { titulo: "Es un Secreto", artista: "Nene Malo", coverUrl: "https://picsum.photos/200?25" },
        { titulo: "Amor Clasificado", artista: "Rodrigo", coverUrl: "https://picsum.photos/200?26" },
        { titulo: "Ya No Vuelvas", artista: "Luck Ra", coverUrl: "https://picsum.photos/200?27" },
        { titulo: "Universo Paralelo", artista: "La Konga", coverUrl: "https://picsum.photos/200?28" },
        { titulo: "Ella Ya Me Olvidó", artista: "Roman El Original", coverUrl: "https://picsum.photos/200?29" }
    ],
    redes: {
        instagram: "https://instagram.com/rodtang",
        spotify: "https://open.spotify.com/"
    }
}
];

async function seed() {

    try {

        await getMongoDBConnection();

        console.log("Conectado a Mongo");

        await Usuario.deleteMany({
            spotifyId: { $regex: /^mock_/ }
        });

        console.log("Mocks anteriores eliminados");

        const resultado = await Usuario.insertMany(usuariosMock);

        console.log(`${resultado.length} usuarios creados`);

        resultado.forEach(usuario => {
            console.log(
                `${usuario.nombre} - ${usuario._id}`
            );
        });

        process.exit();

    } catch (error) {

        console.log(error);

        process.exit(1);
    }
}

seed();