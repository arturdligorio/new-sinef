import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { Subject } from 'rxjs';
import { colors } from '../model/colors';

@Component({
  selector: 'app-calendario-academico',
  templateUrl: './calendario-academico.component.html',
  styleUrls: ['./calendario-academico.component.css']
})
export class CalendarioAcademicoComponent implements OnInit {

  @Input() view: string = 'month';

  @Input() viewDate: Date = new Date();

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();


  events: CalendarEvent[] = [

    {start: new Date(), title: 'Teste'},
    {start: new Date(), title: 'Teste2'}

  ];

  refresh: Subject<any> = new Subject();

  addEvent(date: Date): void {
    this.events.push({
      start: date,
      title: 'New event',
      color: colors.red
    });
    this.refresh.next();
  }
  constructor() { }

  ngOnInit() {
  }

}
