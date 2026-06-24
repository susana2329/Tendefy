import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPerfil, ArtistaItem, CancionItem, RedesSociales, SpotifyData } from '../../models/infousuario';
import { PersonalService } from '../../services/personal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-personal.html',
  styleUrl: './perfil-personal.css'
})
export class PerfilPersonalComponent implements OnInit {

  public usuario: UsuarioPerfil | null = null;

  public artistas: ArtistaItem[] = [];
  public canciones: CancionItem[] = [];

  public redes: RedesSociales = {
    instagram: '',
    spotify: '',
    twitter: ''
  };

  constructor(
    private personalService: PersonalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (!this.id) return;

    this.personalService.obtenerDatosUsuario(this.id).subscribe({
      next: (data: UsuarioPerfil) => {
        this.usuario = data;
        this.redes = data.redes;
      },
      error: (error) => {
        console.log('Error al traer el usuario', error);
      }
    });

    this.personalService.obtenerDatosSpotify(this.id).subscribe({
      next: (data: SpotifyData) => {
        this.artistas = data.topArtists;
        this.canciones = data.topTracks;
      },
      error: (error) => {
        console.log('Error al traer datos de Spotify', error);
      }
    });
  }

  botonEditar(): void {
    this.router.navigate(['/app/edit']);
  }
}

