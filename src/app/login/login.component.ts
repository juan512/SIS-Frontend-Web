import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import { UsuariosService } from '../services/usuarios.service';

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
  constructor(private usersService: UsuariosService) { 
    /* this.user = this.usersService.save(
     {
       email: [''],
       contrasena: null,
       rol: null,
       ci:null,
       nombre:null,
       nacimiento: null,
       direccion: null,
       celular: null,
       telefono: null,
     }) */;
    
 }

  ngOnInit() {
  }

  ingresarCuenta(){
    this.usersService.ingresar(this.user).subscribe((data) => {
      alert ('Inicio con éxito');
      console.log(data);
    }, (errorServicio) => {
      console.log(errorServicio);
      alert('Ocurrió un error al iniciar sesión');
    });
  }
 
}
