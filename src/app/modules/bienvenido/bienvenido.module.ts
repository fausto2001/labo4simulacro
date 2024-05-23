import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from 'src/app/bienvenido/bienvenido.component';

const routes: Routes =[
  {path: '', component: BienvenidoComponent}
]


@NgModule({
  declarations: [BienvenidoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BienvenidoModule { }
