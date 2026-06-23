import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioPerfil, SpotifyData } from '../models/infousuario';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {

  private API_URL = 'http://localhost:3000/api/usuarios';

  constructor(private _httpClient: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  obtenerDatosUsuario(id: string): Observable<UsuarioPerfil> {
    return this._httpClient.get<UsuarioPerfil>(`${this.API_URL}/perfil/${id}`, { headers: this.getHeaders() });
  }

  obtenerDatosSpotify(id: string): Observable<SpotifyData> {
    return this._httpClient.get<SpotifyData>(`${this.API_URL}/perfil/${id}/spotify`, { headers: this.getHeaders() });
  }
}
