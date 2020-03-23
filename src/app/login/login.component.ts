import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User={
    email: null,//
    contrasena: null,//
    rol: null,
    ci:null,
    nombre:null,
    nacimiento: null,
    direccion: null,
    celular: null,
    telefono: null,
    created_at: null,
    updated_at: null,
  };
  constructor() { }

  ngOnInit() {
  }

  ingresarCuenta(){
    console.log(this.user);
  }

}
