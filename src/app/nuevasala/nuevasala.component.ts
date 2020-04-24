import { Component, OnInit } from '@angular/core';
import { Sala } from '../interfaces/sala';
import { Cirugia } from '../interfaces/cirugia';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SalasService } from '../services/salas.service';

@Component({
  selector: 'app-nuevasala',
  templateUrl: './nuevasala.component.html',
  styleUrls: ['./nuevasala.component.css']
})
export class NuevasalaComponent implements OnInit {
 
  sala:Sala={
    'id':null,
    'nombre':null,
    'descripcion':null,
  };

  id_paciente: any;
  editing: boolean = false;
  public cirugias: Cirugia[];
  public datitos;
  public route;
  public estado;
  API_ENDPOINT= 'http://177.222.52.26:8000/api'

  constructor(private salasService: SalasService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) {
    this.id_paciente =this.activatedRoute.snapshot.params['id_paciente'];
    if(this.id_paciente>0){
      this.estado=0;
    }else{
      this.estado=1;
    }
    console.log(this.id_paciente);
    this.recdat().subscribe((data) => {
      console.log(data);
      //console.log(data[0]['name']);
      this.sala['nombre']=data[0]['nombre'];
      this.sala['descripcion']=data[0]['descripcion'];
      this.datitos=data;
    }, error => {
      console.log(error);
    
    });;
   }

  ngOnInit() {
  }

  registrarCirugia(){
    this.salasService.save(this.sala).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  update(){
    this.salasService.update(this.id_paciente,this.sala).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  
  recdat(){
    this.route="/cirugia/"+this.id_paciente+"";
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }

}
