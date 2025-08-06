// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { GuideComponent } from './guides/guides.component'; // si standalone
// import { HomeComponent } from './home/home.component'; // si tu en as un

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'guides',  // ou 'home' si tu préfères
    pathMatch: 'full'
  },
  {
    path: 'guides',
    component: GuideComponent
  },
  // Tu peux ajouter d'autres routes ici
  // { path: 'about', component: AboutComponent }
];
