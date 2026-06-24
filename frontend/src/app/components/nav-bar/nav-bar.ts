import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  userid ='';
  payload:any
  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token){
     this.payload = JSON.parse(atob(token.split('.')[1]));
    }
    console.log(this.payload, 'ACA ESTA PAYLOAD')
    this.userid = this.payload.id;
  }

}
