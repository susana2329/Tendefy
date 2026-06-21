import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPerfil, ArtistaItem, CancionItem, RedesSociales } from '../../models/infousuario';
import { PersonalService } from '../../services/personal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-personal.html',
  styleUrl: './perfil-personal.css'
})
export class PerfilPersonalComponent implements OnInit {
  public usuario: UsuarioPerfil | null = null;
  public nombre: string = '';
  public biografia: string = '';
  public fotoperfil: string = '';

  public artistas: ArtistaItem[] = [];
  public canciones: CancionItem[] = [];
  public redes: RedesSociales = {
    instagram: '',
    spotify: '',
    twitter: ''
  }
  constructor(private personalService: PersonalService, private router: Router) { }

  ngOnInit(): void {
    this.personalService.obtenerDatosUsuario().subscribe(
      {
        next: (data: UsuarioPerfil) => {
          this.nombre = data.nombre;
          this.biografia = data.descripcion;
          this.fotoperfil = data.avatarUrl.url;
          this.artistas = data.topArtistas;
          this.canciones = data.topCanciones;
          this.redes = data.redes;

        },
        error: error => console.log(error)
      })
  }
  botonEditar(): void {
    this.router.navigate(['/app/edit']);
  }
}
