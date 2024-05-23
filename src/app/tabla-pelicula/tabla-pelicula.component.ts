import { Component } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  constructor(private fire: Firestore){}

  peliculas : Pelicula[] = [];
  pelicula : Pelicula | undefined;
  mostrarDetalle : boolean = false;

  ngOnInit()
  {
    this.traerPeliculas().subscribe(resultados =>
      {
        resultados.forEach(resultado =>
          {
            this.peliculas.push(resultado);
          }
        )
      }
    )
    console.info(this.peliculas);
  }

  traerPeliculas() : Observable<Pelicula[]>
  {
    const peliculasRef = collection(this.fire, 'peliculas');
    return collectionData(peliculasRef, {idField: 'idDoc'}) as Observable<Pelicula[]>
  }

  detallePelicula(resultado : Pelicula)
  {
    this.pelicula = resultado;
    this.mostrarDetalle = true;
  }  
}
