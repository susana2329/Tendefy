export interface ArtistaItem {
  nombre: string;
  imagenUrl: string;
}

export interface CancionItem {
  titulo: string;
  artista: string;
  coverUrl: string;
}

export interface RedesSociales {
  instagram?: string;
  spotify?: string;
  twitter?: string;
}

export interface UsuarioPerfil {
  nombre: string;
  avatarUrl: string;
  descripcion: string;
  compatibilidad: number;
  topArtists: ArtistaItem[];
  topTracks: CancionItem[];
  redes: RedesSociales;
}