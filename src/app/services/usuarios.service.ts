import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_ENDPOINT= 'http://181.188.163.198:8000/api'; 
  constructor(private httpClient: HttpClient) { }

  /*get(){
    return this.httpClient.get(url: this.API_ENDPOINT + '/users')
  }*/
  save(user: User){
    
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    console.log(user);
    console.log(headers);
    return this.httpClient.post(this.API_ENDPOINT + '/auth/singup', user, {headers: headers});
  }

  ingresar(user: User){
    const headers = new HttpHeaders( {'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/auth/login', user, {headers: headers});
  }
  /* registrar(user: User){
    localStorage.getItem("token");
    const headers = new HttpHeaders( {'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/auth/login', user, {headers: headers});
  } */
  
}
