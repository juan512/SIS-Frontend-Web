import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_ENDPOINT= 'http://181.188.163.198:8000/api'; 
  constructor(private httpClient: HttpClient) { }
  get(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/auth/signup', {}, {headers: headers});
  }
  save(user: User){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    console.log(user);
    console.log(headers);
    return this.httpClient.post('http://181.188.163.198:8000/api/auth/signup', user, {headers: headers});
  }

  ingresar(user: User){
    const headers = new HttpHeaders( {'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/auth/login', user, {headers: headers});
  }
  mostrar(user: User){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/userCreator', user, {headers: headers});
  } 
  update(id,user){
    console.log(user);
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.put(this.API_ENDPOINT + '/user/'+id, user, {headers: headers});

  }
  
}
