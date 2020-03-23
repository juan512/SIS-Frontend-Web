import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import{UsuariosService} from '../services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User={
    email: null,
    contrasena: null,
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
    
  }

  ngOnInit() {
  }

  registrarUser(){
    this.usersService.save(this.user).subscribe((data) => {
      alert ('Usuario registrado con éxito');
      console.log(data);
    }, (errorServicio) => {
      console.log(errorServicio);
      alert('Ocurrió un error al registrar usuario');
    });
  }

} 
