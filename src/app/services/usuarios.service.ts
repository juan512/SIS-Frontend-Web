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
    /* user:[
      {"name":"mateooooooo",
      "email":"asdasdasd@asdasd.com",
      "password":"asdasd",
      "id_rol":1}
    ]
       */
      var sUser={
        //id: null,
        'name': "maoteoeoeoe",
        'email': "11111asadasda@asdas.comd",
        'password': "asdasdaasdasdasdd",
        'password_confirmation': "asdasdaasdasdasdd",
        'id_rol': 4,
      };

      
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    console.log(sUser);
    console.log(headers);
    return this.httpClient.post('http://181.188.163.198:8000/api/auth/signup', sUser, {headers: headers});
  }

  ingresar(user: User){
    const headers = new HttpHeaders( {'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/auth/login', user, {headers: headers});
  }
  mostrar(user: User){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/userCreator', user, {headers: headers});
  } 
  
}
