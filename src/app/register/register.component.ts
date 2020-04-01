import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import{UsuariosService} from '../services/usuarios.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User={
    id: null,
    name: null,
    email: null,
    password: null,
    id_rol: null,
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
