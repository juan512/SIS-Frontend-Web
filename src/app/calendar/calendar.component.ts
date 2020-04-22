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
  changeDetection: ChangeDetectionStrategy.OnPush,
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


constructor(private httpClient: HttpClient) {
  this.mostrar_cirugias().subscribe((data) => {
    console.log(data);
    console.log(data[0]['name']);
    this.valor=data;
  }, error => {
    console.log(error);
  
  });; 


  this.eventData = [
    {
       title: 'event1',
       start: moment("20200410", "YYYYMMDD")
    },
    {
       title: 'event2',
       start: moment(),
       end: moment().add(2, 'days')
    },

];

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
          this.dayClick (date, jsEvent, activeView);
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
  alert('clicked ' + jsEvent);
}
eventDragStart (timeSheetEntry, jsEvent, ui, activeView) {
  console.log ('evento arrastre inicio');
}
eventDragStop (timeSheetEntry, jsEvent, ui, activeView) {
  console.log ('evento de arrastre final');
}

ngOnInit() {
  $('#full-calendar').fullCalendar(
           this.defaultConfigurations,

        );

     }

  mostrar_cirugias(){
  const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
  return this.httpClient.post(this.API_ENDPOINT + '/userCreator', {}, {headers: headers});

  }
}

