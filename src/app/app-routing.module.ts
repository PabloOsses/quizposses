import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VistaComponent} from "../app/vista/vista.component";
import {ListadoComponent} from "../app/listado/listado.component";
import {AdicionarComponent} from "../app/adicionar/adicionar.component";
const routes: Routes = [
  {path:"vista", component:VistaComponent},
  {path:"listado",component:ListadoComponent},
  {path:"adicionar",component:AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
