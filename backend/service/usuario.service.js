const usuarioRepository = require('../repository/usuario.repository')


exports.getUsuarioById = async (id) => {
    try {
        console.log("SERVICE - getUsuarioById")
        let usuario = await usuarioRepository.obtenerUsuarioPorId(id)

        if (usuario) {
            usuario.topArtists = usuario.topArtists.filter((_, index) => index < 4)
            usuario.topTracks = usuario.topTracks.filter((_, index) => index < 5)
        }

        return usuario
    } catch (error) {
        console.log("Error en getUsuarioById()", error)
    }
}
exports.getPerfilSpotify = async (id) => {
    try {
        const usuario = await usuarioRepository.obtenerUsuarioPorId(id);
        return {
            topArtists: usuario.topArtists.filter((_, index) => index < 4),
            topTracks: usuario.topTracks.filter((_, index) => index < 5)
        };
    } catch (error) {
        console.log("Error al getPerfilSpotify()", error);
    }
};
