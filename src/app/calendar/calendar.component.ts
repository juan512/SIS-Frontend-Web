import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild, TemplateRef, DoCheck, AfterViewInit, OnDestroy, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import 'fullcalendar';
import * as moment from 'moment';
import { Cirugia } from '../interfaces/cirugia';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  /*template:'bootstrap',*/
})
export class CalendarComponent {

  API_ENDPOINT = 'http://177.222.52.26:8000/api'
  cirugia: Cirugia[];
  mateo;
  valor;
  constructor(private httpClient: HttpClient) {
    this.mostrar_cirugias().subscribe((data) => {
      this.mateo = data[3]['fechaIngreso'].split("");
      this.mateo = this.mateo[0] + this.mateo[1] + this.mateo[2] + this.mateo[3] + this.mateo[5] + this.mateo[6] + this.mateo[8] + this.mateo[9];
      this.valor=data;
    }, error => {
      console.log(error);
    });;    



  }


  boton() {
    $('#full-calendar').fullCalendar(
      {
        events:[
          {
            title: "Evento 1",
            //start: moment(this.mateo, "YYYYMMDD")
            start: moment(this.mateo, "YYYYMMDD"),
          },{
            title: "Evento2",
            //start: moment(this.mateo, "YYYYMMDD")
            start: moment("20200416", "YYYYMMDD"),
          },{
            title: "Evento3",
            //start: moment(this.mateo, "YYYYMMDD")
            start: moment("20200417", "YYYYMMDD"),
          },
        ],
      }
    );
  }

  mostrar_cirugias() {
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/cirugia/getCirugias', {}, {headers: headers});


  }
}

