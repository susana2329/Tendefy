import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchingService {

  constructor(private http: HttpClient) { }

  parchEditProfile(form: FormData) {
    const token = localStorage.getItem('token');
    return this.http.patch(
      `http://localhost:3000/perfil/edit/patch`, form,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  }
}