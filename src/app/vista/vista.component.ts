import { Component, OnInit } from '@angular/core';
import {Usuarios,ListaUsuarios} from "../../app/interfaces/usuarios";
@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {
  Lista:Array<Usuarios>=ListaUsuarios;
  constructor() { }

  ngOnInit(): void {
  }

}
