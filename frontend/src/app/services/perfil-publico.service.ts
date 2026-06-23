import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioPerfil } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilPublicoService {

  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  obtenerUsuarioPorId(id: string): Observable<UsuarioPerfil> {
    return this.http.get<UsuarioPerfil>(`${this.apiUrl}/${id}`);
  }
}