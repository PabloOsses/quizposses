import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {Usuarios,ListaUsuarios} from "../../app/interfaces/usuarios";
@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {
  formulario:FormGroup;
  nombre:AbstractControl;
  //nombre:any;
  lista:Array<String>=[];
  Lista2:Array<Usuarios>=ListaUsuarios;
  constructor(private fb:FormBuilder) { 

    this.formulario=this.fb.group({
      nombre:["",[Validators.required, Validators.maxLength(10)]]
      /*[,[validaciones(en este caso requerido y maximo de caracteres)]] */
    });
    this.nombre=this.formulario.controls["nombre"];
  }

  ngOnInit(): void {
    this.nombre=this.formulario.get('nombre') as FormGroup;
  }
  Crear(){
    //this.nombre=this.formulario.controls["nombre"] as FormGroup;
    this.lista.push(this.nombre.value);
    console.log("funcionaaa");
    console.log(this.lista);

  }
  Eliminar(){
    this.lista.forEach((item,index)=>{
      if(this.nombre.value==item){
        this.lista.splice(index,1);
      }
    })
  }
}
