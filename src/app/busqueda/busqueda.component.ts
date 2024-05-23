import { Component } from '@angular/core';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  mostrarTabla : boolean = false;


  mostrarTablaPelicula()
  {
    this.mostrarTabla = true;
  }
}
