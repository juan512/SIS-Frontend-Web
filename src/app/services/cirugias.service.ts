import { Injectable } from '@angular/core';
import {Cirugia} from '../interfaces/cirugia';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CirugiasService {
  API_ENDPOINT= 'http://177.222.52.26:8000/api'; 

  constructor(private httpClient: HttpClient) { }

  save(cirugia: Cirugia){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    console.log(cirugia);
    console.log(headers);
    return this.httpClient.post('http://177.222.52.26:8000/api/cirugia', cirugia, {headers: headers});
  }

  update(id_paciente,cirugia){
    console.log(cirugia);
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.put(this.API_ENDPOINT + '/user/'+id_paciente, cirugia, {headers: headers});

  }
}
