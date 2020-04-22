import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import{UsuariosService} from '../services/usuarios.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User={
    //id: null,
    'name': null,
    'email': null,
    'password': null,
    'password_confirmation': null,
    'id_rol': '4',
  };

  id: any;
  editing: boolean = false;
  public users: User[];
  public datitos;
  public route;
  public estado;
  API_ENDPOINT= 'http://177.222.52.26:8000/api'

  constructor(private usersService: UsuariosService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) { 


    this.id =this.activatedRoute.snapshot.params['id'];
    if(this.id>0){
      this.estado=0;
    }else{
      this.estado=1;
    }
    console.log(this.id);
    this.recdat().subscribe((data) => {
      console.log(data);
      console.log(data[0]['name']);
      this.user['name']=data[0]['name'];
      this.user['email']=data[0]['email'];
      this.datitos=data;
    }, error => {
      console.log(error);
    
    });;

    /* this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
      this.editing = true;
      this.usersService.get().subscribe((data:User[]) => {
        this.users = data;
        console.log(this.user);
        //this.user = this.users.find( (m) => {return m.id == this.id});
    
      }, error => {
          alert(error.error['message']);
      });
    }

    else{
      this.editing=false;
    } */
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
      }) ;*/
     
  }

  ngOnInit() {
  }

  registrarUser(){
    this.usersService.save(this.user).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  } 
  update(){
    this.usersService.update(this.id,this.user).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  
  recdat(){
    this.route="/user/"+this.id+"";
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }

} 
