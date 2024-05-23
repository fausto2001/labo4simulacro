import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'bienvenido', loadChildren: () => import('./modules/bienvenido/bienvenido.module').then(m => m.BienvenidoModule) },
  { path: '', loadChildren: () => import('./modules/bienvenido/bienvenido.module').then(m => m.BienvenidoModule) },
  { path: 'busqueda', loadChildren: () => import('./modules/busqueda/busqueda.module').then(m => m.BusquedaModule) },
  { path: 'actor', loadChildren: () => import('./modules/actor/actor.module').then(m => m.ActorModule)},
  { path: 'peliculas', loadChildren: () => import('./modules/peliculas/peliculas.module').then(m=> m.PeliculasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
