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

  API_ENDPOINT= 'http://181.188.163.198/SIS-Backend/app/Http/Controllers/AuthController'
  users: User[];
  constructor(private ususuarioService: UsuariosService, private httpClient: HttpClient) {
      httpClient.get(this.API_ENDPOINT + '/getUser').subscribe((data:User[]) => {
        this.users=data;
    });
      }

      ngOnInit() {
      }
}
