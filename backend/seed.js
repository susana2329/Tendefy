const { getMongoDBConnection } = require('./database/conexion');
const Usuario = require('./repository/model/usuario');
require('dotenv').config();

const nombres = [
    "Mateo", "Valentina", "Tobias", "Camila", "Lucas", "Sofia",
    "Tomás", "Isabella", "Benjamín", "Martina", "Nicolás", "Lucía",
    "Facundo", "Florencia", "Agustín", "Micaela", "Miguel", "Catalina",
    "Rodrigo", "Julieta", "Emiliano", "Juliana", "Gonzalo", "Natalia",
    "Ramiro", "Susana", "Leandro", "Romina", "Maxi", "Celeste"
];

const ubicaciones = [
    "Buenos Aires","San Martin", "Córdoba","Merlo", "Rosario", "Mendoza", "La Plata",
    "Mar del Plata", "Tucumán", "Salta", "Santa Fe", "San Juan","Lugano"
];

const descripciones = [
    "Amante de la música y los viajes",
    "McGregor vs Holloway 2 | 11 de julio, sino gana holloway me muero",
    "Programador de día, músico de noche",
    "tantos mocks vas a necesitar loco",
    "Fan del indie y el café",
    "Deportista MMA",
    "Buscando gente con buen gusto",
    "El rock es mi idioma",
    "El indio siempre presente",
    "Pop, electrónica y mucha energía",
    "Si no conoces a este artista, te lo presento",
    "Mis auriculares siempre puestos",
    "Los odio a todos"
];

const artistas = [
    { nombre: "Airbag", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Airbag_2022.jpg" },
    { nombre: "Linkin Park", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Linkin_Park_2014.jpg" },
    { nombre: "Slipknot", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Slipknot_-_Rock_am_Ring_2019.jpg" },
    { nombre: "Megadeth", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Megadeth_2018.jpg" },
    { nombre: "Bad Bunny", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bad_Bunny_2019.jpg" },
    { nombre: "Karol G", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Karol_G_2022.jpg" },
    { nombre: "Tame Impala", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Kevin_Parker_2019.jpg" },
    { nombre: "The 1975", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/The_1975_2014.jpg" },
    { nombre: "Doja Cat", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Doja_Cat_2021.jpg" },
    { nombre: "Red Hot Chili Peppers", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/RHCP_2016.jpg" },
    { nombre: "Foo Fighters", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Foo_Fighters_2018.jpg" },
    { nombre: "María Becerra", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Maria_Becerra_2022.jpg" },
    { nombre: "Emilia", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Emilia_Mernes_2023.jpg" },
    { nombre: "Nene Malo", imagenUrl: "https://picsum.photos/300?21" },
    { nombre: "La Konga", imagenUrl: "https://picsum.photos/300?23" },
    { nombre: "Luck Ra", imagenUrl: "https://picsum.photos/300?24" },
    { nombre: "Mac DeMarco", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/Mac_DeMarco_2019.jpg" },
    { nombre: "Queens Of The Stone Age", imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/QOTSA_2018.jpg" }
];

const canciones = [
    { titulo: "Anarquía en Buenos Aires", artista: "Airbag", coverUrl: "https://picsum.photos/200?1" },
    { titulo: "Numb", artista: "Linkin Park", coverUrl: "https://picsum.photos/200?2" },
    { titulo: "Duality", artista: "Slipknot", coverUrl: "https://picsum.photos/200?3" },
    { titulo: "Symphony of Destruction", artista: "Megadeth", coverUrl: "https://picsum.photos/200?4" },
    { titulo: "Tusa", artista: "Karol G", coverUrl: "https://picsum.photos/200?5" },
    { titulo: "Paint The Town Red", artista: "Doja Cat", coverUrl: "https://picsum.photos/200?6" },
    { titulo: "The Less I Know The Better", artista: "Tame Impala", coverUrl: "https://picsum.photos/200?7" },
    { titulo: "Chocolate", artista: "The 1975", coverUrl: "https://picsum.photos/200?8" },
    { titulo: "Californication", artista: "RHCP", coverUrl: "https://picsum.photos/200?9" },
    { titulo: "Everlong", artista: "Foo Fighters", coverUrl: "https://picsum.photos/200?10" },
    { titulo: "Automático", artista: "María Becerra", coverUrl: "https://picsum.photos/200?11" },
    { titulo: "Es un Secreto", artista: "Nene Malo", coverUrl: "https://picsum.photos/200?12" },
    { titulo: "Ya No Vuelvas", artista: "Luck Ra", coverUrl: "https://picsum.photos/200?13" },
    { titulo: "No One Knows", artista: "QOTSA", coverUrl: "https://picsum.photos/200?14" },
    { titulo: "Sweater Weather", artista: "The Neighbourhood", coverUrl: "https://picsum.photos/200?15" }
];

function randomItems(array, n) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarUsuarios(cantidad) {
    const usuarios = [];
    for (let i = 0; i < cantidad; i++) {
        const nombre = nombres[i % nombres.length];
        usuarios.push({
            spotifyId: `mock_${String(i + 1).padStart(4, '0')}`,
            nombre: `${nombre} ${i + 1}`,
            edad: randomInt(18, 40),
            ubicacion: ubicaciones[i % ubicaciones.length],
            avatarUrl: `https://i.pravatar.cc/300?img=${(i % 70) + 1}`,
            descripcion: descripciones[i % descripciones.length],
            topArtists: randomItems(artistas, 4),
            topTracks: randomItems(canciones, 5),
            redes: {
                instagram: `https://instagram.com/usuario${i + 1}`,
                spotify: `https://open.spotify.com/user/usuario${i + 1}`
            }
        });
    }
    return usuarios;
}

async function seed() {
    try {
        await getMongoDBConnection();
        console.log("Conectado a Mongo");

        await Usuario.deleteMany({ spotifyId: { $regex: /^mock_/ } });
        console.log("Mocks anteriores eliminados");

        const usuariosMock = generarUsuarios(1500);
        const resultado = await Usuario.insertMany(usuariosMock);
        console.log(`${resultado.length} usuarios creados`);

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

seed();