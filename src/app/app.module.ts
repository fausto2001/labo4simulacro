import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { PeliculaAltaComponent } from './peliculas/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './peliculas/pelicula-listado/pelicula-listado.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"labo-iv-a8ace","appId":"1:416010594892:web:349cc79b2a138a7236a2e9","storageBucket":"labo-iv-a8ace.appspot.com","apiKey":"AIzaSyCQc-CJZI0SkCg6oG5t2FPDAaU9RehnTUI","authDomain":"labo-iv-a8ace.firebaseapp.com","messagingSenderId":"416010594892","measurementId":"G-D3MSPYW20W"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
