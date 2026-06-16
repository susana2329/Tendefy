import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface ArtistaItem {
  ranking: number;
  nombre: string;
  imagenUrl: string; 
}

interface CancionItem {
  ranking: number;
  titulo: string;
  artista: string;
  coverUrl: string; 
}

interface RedesSociales {
  instagram: string;
  spotify: string;
  twitter: string;
}

@Component({
  selector: 'app-perfil-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-personal.html',
  styleUrl: './perfil-personal.css'
})
export class PerfilPersonalComponent implements OnInit {
  public nombre: string = '';
  public usuario: string = '';
  public biografia: string = '';
  public fotoperfil: string = '';
   
  public artistas: ArtistaItem[] = [];
  public canciones: CancionItem[] = [];
  public redes!: RedesSociales;

  constructor() {} 

  ngOnInit(): void {
    this.nombre = 'Michael B. Jordan';
    this.usuario = 'michael.B.J';
    this.biografia = 'Me gusta actuar y modelar. 🎬✨';
    this.fotoperfil = 'assets/images/rodtang.jpg'; 
   
  
this.artistas = [
  { ranking: 1, nombre: 'CA7RIEL&PacoA', imagenUrl: 'assets/imagenes/pacoycato.jpg' }, 
  { ranking: 2, nombre: 'Mon Laferte', imagenUrl: 'assets/imagenes/monlaferte.jpg' },
  { ranking: 3, nombre: 'Doja Cat', imagenUrl: 'assets/imagenes/dojacat.jpg' },
  { ranking: 4, nombre: 'Kali Uchis', imagenUrl: 'assets/imagenes/kaliUchis.jpg' }
];

this.canciones = [
  { ranking: 1, titulo: 'Mi Diosa', artista: 'CA7RIEL & Paco Amoroso', coverUrl: 'assets/imagenes/midiosa.jpg' },
  { ranking: 2, titulo: 'Amor Completo', artista: 'Mon Laferte', coverUrl: 'assets/imagenes/amorcompleto.jpg' },
  { ranking: 3, titulo: 'Aint Shit', artista: 'Doja Cat', coverUrl: 'assets/imagenes/aintshit.jpg' },
  { ranking: 2, titulo: 'Importor', artista: 'CA7RIEL & Paco Amoroso', coverUrl: 'assets/imagenes/impostor.jpg' },
  { ranking: 3, titulo: 'telepatia', artista: 'Kali Uchis', coverUrl: 'assets/imagenes/kaliUchis.jpg' }
];

    this.redes = {
      instagram: 'https://instagram.com/',
      spotify:   'https://open.spotify.com/',
      twitter:   'https://twitter.com/',
    };
  }
}