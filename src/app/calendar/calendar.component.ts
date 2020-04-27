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
  public fecha;
  public titulo;
  public valor;
  constructor(private httpClient: HttpClient) {
    this.mostrar_cirugias().subscribe((data) => {
      
      this.valor=data;
     
      for(var i = 0;i<this.valor.length;i++) { 
        this.titulo = this.valor[i]['id']
        this.fecha = this.valor[i]['fechaIngreso'].split("");
        this.fecha = this.fecha[0] + this.fecha[1] + this.fecha[2] + this.fecha[3] + this.fecha[5] + this.fecha[6] + this.fecha[8] + this.fecha[9];
        console.log("datos_"+this.valor.length);
      }
    }, error => {
      console.log(error);
    });;    
    console.log(this.fecha);


  }


  boton() {
    $('#full-calendar').fullCalendar(
      {
        events:[
          {
            title: "ID: "+this.titulo,
            start: moment(this.fecha, "YYYYMMDD"),
            color: '#2CAABE',
            textColor: 'white'
            
          },
          
        ],
        
        
        selectable: true,
        eventLimit: true,

        titleFormat: 'MMMM YYYY',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        
        buttonText: {
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día'
        },
        buttonIcons: {
          prev: 'left-single-arrow',
          next: 'right-single-arrow',
          prevYear: 'left-double-arrow',
          nextYear: 'right-double-arrow'
        },
        
        views: {
            agenda: {
              eventLimit: 2
            }
        },
        allDaySlot: false,
        slotDuration: moment.duration('00:15:00'),
        slotLabelInterval: moment.duration('01:00:00'),
        firstDay: 1,
        selectHelper: true,
        


      }
    );
  }
  ngOnInit() {
    //this.boton();
  }
  mostrar_cirugias() {
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/cirugia/getCirugias', {}, {headers: headers});


  }
}



