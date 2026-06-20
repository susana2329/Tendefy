export interface UsuarioPerfil {
  _id: string;
  nombre: string;
  avatarUrl: string;      
  descripcion: string;
  topArtistas: ArtistaItem[];
  topCanciones: CancionItem[];
  redes: RedesSociales;
}

export interface ArtistaItem {
  ranking: number;
  nombre: string;
  imagenUrl: string; 
}

export interface CancionItem {
  ranking: number;
  titulo: string;
  artista: string;
  coverUrl: string; 
}

export interface RedesSociales {
  instagram?: string;
  spotify?: string;
  twitter?: string;
}
