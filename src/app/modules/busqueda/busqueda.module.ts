import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from 'src/app/busqueda/busqueda.component';
import { RouterModule, Routes } from '@angular/router';
import { TablaPeliculaComponent } from 'src/app/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from 'src/app/detalle-pelicula/detalle-pelicula.component';

const routes: Routes =[
  {path: '', component: BusquedaComponent}
]


@NgModule({
  declarations: [BusquedaComponent, TablaPeliculaComponent, DetallePeliculaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BusquedaModule { }
