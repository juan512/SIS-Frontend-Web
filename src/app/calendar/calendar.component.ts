import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild, TemplateRef, } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';
import 'fullcalendar';
import * as moment from 'moment';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Cirugia } from '../interfaces/cirugia';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  /*template:'bootstrap',*/
})
export class CalendarComponent implements OnInit {


  @Input()
  set configurations(config: any) {
     if (config) {
        this.defaultConfigurations = config;
     }
  }
@Input() eventData: any;

defaultConfigurations: any;

public valor;
  API_ENDPOINT= 'http://177.222.52.26:8000/api'
  cirugia: Cirugia[];
 mateo="";
res;

constructor(private httpClient: HttpClient) {
  

  this.mostrar_cirugias().subscribe((data) => {
    this.mateo = data[3]['fechaIngreso'].split("");
    this.mateo=this.mateo[0]+this.mateo[1]+this.mateo[2]+this.mateo[3]+this.mateo[5]+this.mateo[6]+this.mateo[8]+this.mateo[9];
    
    console.log("prueba"+this.mateo);
    
    //console.log(data[0]['id_paciente']);
    this.valor=data;
    console.log(this.valor);

  }, error => {
    console.log(error);
  
  });; 
  this.eventData = [
    {
       title: this.mateo+"sdaaaa",
       //start: moment(this.mateo, "YYYYMMDD")
       start: moment("20200415", "YYYYMMDD"),
    }];

    this.defaultConfigurations = {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'calendarPlugins' ],
      selectable: true,
    editable: true,
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
        events: this.eventData,



        dayClick: (date, jsEvent, activeView) => {
          alert("Día "+date.format());

       },
       

       eventDragStart: (timeSheetEntry, jsEvent, ui, activeView) => {
          this.eventDragStart (
              timeSheetEntry, jsEvent, ui, activeView
          );
       },
 eventDragStop: (timeSheetEntry, jsEvent, ui, activeView) => {
          this.eventDragStop (
             timeSheetEntry, jsEvent, ui, activeView
          );
       },

      };
      

}

dayClick (date, jsEvent, activeView) {
  alert('clicked ' + date.format());
}
eventDragStart (timeSheetEntry, jsEvent, ui, activeView) {
  console.log ('evento arrastre inicio');
}
eventDragStop (timeSheetEntry, jsEvent, ui, activeView) {
  console.log ('evento de arrastre final');
}


ngOnInit() {
/*
  $('#full-calendar').fullCalendar(

           this.defaultConfigurations,

        );*/

}
boton(){
  console.log("asd");
  $('#full-calendar').fullCalendar(

    this.defaultConfigurations,

 );
}

  mostrar_cirugias(){
  //const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
  return this.httpClient.get(this.API_ENDPOINT + '/cirugia/getCirugias');

  }
}

function eventos(mateo){
  

  console.log("prueba2"+mateo);

  var eventData = [
    {
       title: mateo+"asd",
       //start: moment(this.mateo, "YYYYMMDD")
       start: moment("20200415", "YYYYMMDD"),
    }];
  return eventData;
}

