import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { UsuarioPerfil } from '../../models/usuario.model';
import { PerfilPublicoService } from '../../services/perfil-publico.service';

@Component({
  selector: 'app-perfil-publico',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './perfil-publico.html',
  styleUrls: ['./perfil-publico.css'],
})
export class PerfilPublicoComponent implements OnInit {

  usuario: UsuarioPerfil | null = null;

  constructor(
    private perfilPublicoService: PerfilPublicoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.perfilPublicoService.obtenerUsuarioPorId(id).subscribe({
        next: (data) => {
          this.usuario = data;
        },
        error: (error) => {
          console.log('Error al traer el usuario', error);
        }
      });
    }
  }

  volver(): void {
    window.history.back();
  }
}