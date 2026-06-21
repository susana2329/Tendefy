import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UsuarioPerfil} from '../models/infousuario';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {

private API_URL = 'http://localhost:3000/api/usuarios/perfil/6a3493ec2b1c6278d4e5905c';

  constructor(private _httpClient: HttpClient){}

  obtenerDatosUsuario(): Observable<UsuarioPerfil>{
    return this._httpClient.get<UsuarioPerfil>(this.API_URL)
  }
  
}
