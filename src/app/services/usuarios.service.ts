import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_ENDPOINT= 'http://181.188.163.198:8000/api/usuario/crear';
  constructor(private httpClient: HttpClient) { }

  /*get(){
    return this.httpClient.get(url: this.API_ENDPOINT + '/users')
  }*/
  save(user: User){
    const headers = new HttpHeaders( {'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/users', user, {headers: headers});
  }
}
