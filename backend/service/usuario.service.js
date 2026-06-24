const usuarioRepository = require('../repository/usuario.repository');

exports.getUsuarioById = async (id) => {
    try {
        const usuario = await usuarioRepository.obtenerUsuarioPorId(id);

        if (!usuario) return null;

        return {
            ...usuario,
            topArtists: (usuario.topArtists || []).slice(0, 4),
            topTracks: (usuario.topTracks || []).slice(0, 5)
        };

    } catch (error) {
        console.log("Error getUsuarioById", error);
        throw error;
    }
};

exports.getPerfilSpotify = async (id) => {
    try {
        const usuario = await usuarioRepository.obtenerUsuarioPorId(id);

        if (!usuario) return null;

        return {
            topArtists: (usuario.topArtists || []).slice(0, 4),
            topTracks: (usuario.topTracks || []).slice(0, 5)
        };

    } catch (error) {
        console.log("Error getPerfilSpotify", error);
        throw error;
    }
};