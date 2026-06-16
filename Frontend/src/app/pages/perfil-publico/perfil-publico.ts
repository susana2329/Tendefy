import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
 
export interface Artista {
  nombre: string;
  imagenUrl: string;
}
 
export interface Cancion {
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
  edad: number;
  ubicacion: string;
  avatarUrl: string;
  descripcion: string;
  compatibilidad: number;

  artists: string[];
  currentArtist: string;
  topArtistas: Artista[];
  topCanciones: Cancion[];
  redes: RedesSociales;
}

@Component({
  selector: 'app-perfil-publico',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './perfil-publico.html',
  styleUrls: ['./perfil-publico.css'],
})
export class PerfilPublicoComponent {
 
  usuario: UsuarioPerfil = {
    nombre: 'Rodtang',
    edad: 28,
    ubicacion: 'Buenos Aires',
    avatarUrl: 'assets/images/rodtang.jpg',   
    descripcion: 'Peleador de Muay Thai, amante del pop y el cafe \\(^▽^)/',
    compatibilidad: 89,
   
    artists: ['Linkin Park', 'Megadeth'],
    currentArtist: 'Slipknot',
    
    topArtistas: [
      { nombre: 'Linkin Park',
         imagenUrl: 'assets/images/linkin-park.jpg' },
      { nombre: 'Megadeth', 
        imagenUrl: 'assets/images/megadeth.jpg'    },
      { nombre: 'Slipknot',   
        imagenUrl: 'assets/images/slipknot.jpg'    },
      {nombre: 'Airbag',
       imagenUrl: 'assets/images/airbag.jpg'},
    ],
    topCanciones: [
      {
        titulo:    'Anarquía en Buenos Aires',
        artista:   'Airbag',
        coverUrl:  'assets/images/airbag-cover.jpg',
      },
      {
        titulo:    "Can't Get You Out of My Head",
        artista:   'Kylie Minogue',
        coverUrl:  'assets/images/kylie-cover.jpg',
      },
       {
        titulo:    "Down with the Sickness",
        artista:   'Disturbed',
        coverUrl:  'assets/images/disturbed.jpg',
      },
       {
        titulo:    "Es un secreto",
        artista:   'Nene malo, Magenta',
        coverUrl:  'assets/images/nenemalo.jpg',
      },
       {
        titulo:    "Reptiles",
        artista:   'Airbag',
        coverUrl:  'assets/images/airbagg.jpg',
      }, 
    ],
    redes: {
      instagram: 'https://instagram.com/',
      spotify:   'https://open.spotify.com/',
      twitter:   'https://twitter.com/',
    },
  };
 
  constructor() {}
 
  ngOnInit(): void {
  }
 
 
  volver(): void {
    window.history.back();
  }
}
 