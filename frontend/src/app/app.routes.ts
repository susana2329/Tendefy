import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { PerfilPersonalComponent } from './page/perfil-personal/perfil-personal';
import { PerfilPublicoComponent } from './pages/perfil-publico/perfil-publico';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app',
    component: MainLayout,
    children: [
      // rutas de las otra page
    ]
  },
  { path: '**', redirectTo: 'login' }
];

export const routes: Routes = [
  {
    path: 'perfil-personal',
    component: PerfilPersonalComponent

export const routes: Routes = [
    {
    path: 'perfil-publico',
    component: PerfilPublicoComponent
  }
];
