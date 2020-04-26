import { Component, OnInit } from '@angular/core';
import {Cirugia} from '../interfaces/cirugia';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CirugiasService } from '../services/cirugias.service';

@Component({
  selector: 'app-cirugias',
  templateUrl: './cirugias.component.html',
  styleUrls: ['./cirugias.component.css']
}) 
export class CirugiasComponent implements OnInit {

  cirugia:Cirugia={
    'id_paciente':null,
    'id_sala':null,
    'fechaIngreso':null,
    'fechaSalida':null,
    'fechaInternacion':null,
    'fechaInternacion_salida':null,
    'email_notif':null,
  };

  id_paciente: any;
  editing: boolean = false;
  public cirugias: Cirugia[];
  public datitos;
  public route;
  public estado;
  public salas;
  public pacientes;
  API_ENDPOINT= 'http://177.222.52.26:8000/api'

  constructor(private cirugiasService: CirugiasService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) {

    this.obtener_salas().subscribe((data) => {
      console.log(data);
      this.salas=data;
      console.log(this.salas);
    }, error => {
      console.log(error);
    
    });;  

    this.obtener_pacientes().subscribe((data) => {
      console.log(data);
      this.pacientes=data;
      console.log(this.pacientes);
    }, error => {
      console.log(error);
    
    });;  

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
      /* this.cirugia['name']=data[0]['name'];
      this.cirugia['email']=data[0]['email']; */
      this.datitos=data;
    }, error => {
      console.log(error);
    
    });;
   }

  ngOnInit() {
  } 

  registrarCirugia(){
    console.log(this.cirugia+"asd");
    this.cirugiasService.save(this.cirugia).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  update(){
    this.cirugiasService.update(this.id_paciente,this.cirugia).subscribe((data) => {
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

  obtener_salas(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/salas', {}, {headers: headers});

  }

  obtener_pacientes(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/userCreator', {}, {headers: headers});

  }

}
