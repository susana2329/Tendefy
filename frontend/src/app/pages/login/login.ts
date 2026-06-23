import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
    constructor(private router: Router) {}
        loginConSpotify(){
             window.location.href = 'http://localhost:3000/auth/spotify';
        }
        

}