import { Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "personajes",
        component: PersonajesComponent
    },
    {
        path: 'personaje/:id',
        component: PersonajeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent // Ruta para páginas no encontradas
    },
    {
        path: '**',
        component: NotFoundComponent // Ruta para páginas no encontradas
    }
];
