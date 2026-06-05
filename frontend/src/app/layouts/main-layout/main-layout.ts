import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../../components/nav-bar/nav-bar'

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavBar, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
