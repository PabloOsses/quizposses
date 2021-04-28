import { Component, OnInit } from '@angular/core';
import {Usuarios,ListaUsuarios} from "../../app/interfaces/usuarios";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  Lista:Array<Usuarios>=ListaUsuarios;
  constructor() { }

  ngOnInit(): void {
  }

}
