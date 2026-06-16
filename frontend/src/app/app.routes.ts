import { Routes } from '@angular/router';
import { EditProfile } from './pages/edit-profile/edit-profile';
import { Home } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { PerfilPersonalComponent } from './page/perfil-personal/perfil-personal';
import { PerfilPublicoComponent } from './pages/perfil-publico/perfil-publico';

export const routes: Routes = [{
     path: 'home',
    component: Home   
}
];
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
export const routes: Routes = [

    {
        path: "edit", 
        component:EditProfile
    }