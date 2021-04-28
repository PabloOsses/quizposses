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
  /* lista solo toma el mensaje de creacion de cliente*/
  lista:Array<String>=[];
  /*lista2 tiene la lista de instancias de usuarios */
  Lista2:Array<Usuarios>=ListaUsuarios;
  /* listac solo toma el mensaje de campos obligatorios*/
  listac:Array<String>=[];
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
      genero:this.genero.value,
      pais:this.pais.value,
      ciudad:this.ciudad.value,
    };
    /*los siguiente 3 if deberian ser redundantes , aun asi preferi dejarlos */
    if(this.genero.value==="hombre"){
      test.genero="hombre";
    }
    if(this.genero.value==="mujer"){
      test.genero="mujer";
    }
    if(this.genero.value==="otro"){
      test.genero="otro";
    }
    if((test.apellido==="")||(test.nombre==="")||(test.pais==="")||(test.ciudad==="")||(test.genero==="")){
      this.listac.push("TODOS LOS CAMPOS SON OBLIGATORIOS");
      /*Por alguna razon incluso si coloco en el html "required" ,o los validators
      no me cuentan como campos obligatorios, tuve que hacer esta condicional */
      return;
    }
    this.lista.push("CLIENTE AGREGADO");

    this.Lista2.push(test);
    this.Cancelar();
    /*asi se limpian los campos despues de adicionar un cliente */
    
  }
  
  Cancelar(){
    this.formulario.reset();
    /*RESETEA EL FORMULARIO */
  }
}
