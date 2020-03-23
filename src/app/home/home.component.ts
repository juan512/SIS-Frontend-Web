import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /*API_ENDPOINT= 'http://localhost:8000/api';
  user: User[];
  constructor(private userService: UsuariosService, private httpClient: HttpClient) {
    httpClient.get(url: this.API_ENDPOINT + '/users').subscribe(next: (data:User[]) => {
      this.user= data;
    })
   }*/

  ngOnInit() {
  }

}
