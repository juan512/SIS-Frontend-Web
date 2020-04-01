import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { HttpClient } from '@angular/common/http';
import {User} from '../interfaces/user'

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  API_ENDPOINT= 'http://181.188.163.198:8000/api'
  user: User[];
  constructor(private ususuarioService: UsuariosService, private httpClient: HttpClient) {
      httpClient.get(this.API_ENDPOINT + '/auth/getUser').subscribe((data:User[]) => {
        this.user=data;
    });
      }

      ngOnInit() {
      } 
}
