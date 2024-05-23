import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from 'src/app/peliculas/peliculas.component';
import { PeliculaAltaComponent } from 'src/app/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from 'src/app/peliculas/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {path: '', component: PeliculasComponent},
  {path: 'alta', component: PeliculaAltaComponent},
  {path: 'listado', component: PeliculaListadoComponent}
]

@NgModule({
  declarations: [PeliculasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PeliculasModule { }
