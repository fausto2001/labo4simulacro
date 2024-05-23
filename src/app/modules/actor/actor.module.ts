import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from 'src/app/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from 'src/app/actor/actor-listado/actor-listado.component';
import { ActorComponent } from 'src/app/actor/actor.component';

const routes: Routes = [
  {path: '', component: ActorComponent},
  {path: 'alta', component: ActorAltaComponent},
  {path: 'listado', component: ActorListadoComponent}
]

@NgModule({
  declarations: [ActorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActorModule { }
