import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';

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