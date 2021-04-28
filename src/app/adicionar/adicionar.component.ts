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
  apellido:AbstractControl;
  genero:AbstractControl;
  pais:AbstractControl;
  ciudad:AbstractControl
  //nombre:any;
  lista:Array<String>=[];
  Lista2:Array<Usuarios>=ListaUsuarios;
  constructor(private fb:FormBuilder) { 

    this.formulario=this.fb.group({
      nombre:["",[Validators.required, Validators.maxLength(10)]],
      apellido:["",[Validators.required, Validators.maxLength(10)]],
      /*[,[validaciones(en este caso requerido y maximo de caracteres)]] */
      genero:["",[Validators.required, Validators.maxLength(10)]],
      pais:["",[Validators.required, Validators.maxLength(10)]],
      ciudad:["",[Validators.required, Validators.maxLength(10)]]
    });
    this.nombre=this.formulario.controls["nombre"];
    this.apellido=this.formulario.controls["apellido"];
    this.genero=this.formulario.controls["genero"];
    this.pais=this.formulario.controls["pais"];
    this.ciudad=this.formulario.controls["ciudad"];
  }

  ngOnInit(): void {
    this.nombre=this.formulario.get('nombre') as FormGroup;
    this.apellido=this.formulario.get('apellido') as FormGroup;
    this.genero=this.formulario.get('genero') as FormGroup;
    this.pais=this.formulario.get('pais') as FormGroup;
    this.ciudad=this.formulario.get('ciudad') as FormGroup;
  }
  Crear(){
    // FUNCIONA !!! 
    var test: Usuarios = {
      
      nombre:this.nombre.value,
      apellido:this.apellido.value,
      genero:"otro",
      pais:this.pais.value,
      ciudad:this.ciudad.value,
    };
    if(this.genero.value==="hombre"){
      test.genero="hombre";
    }
    if(this.genero.value==="mujer"){
      test.genero="mujer";
    }
    if(this.genero.value==="otro"){
      test.genero="otro";
    }
    this.lista.push(this.nombre.value);
    console.log("genero");
    console.log(this.genero.value);
    this.Lista2.push(test);
    this.Cancelar();
  }
  Cancelar(){
    this.formulario.reset();
    
  }
}
