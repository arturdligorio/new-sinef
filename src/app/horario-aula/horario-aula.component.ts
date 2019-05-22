import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario-aula',
  templateUrl: './horario-aula.component.html',
  styleUrls: ['./horario-aula.component.css']
})
export class HorarioAulaComponent implements OnInit {

  elementsMateria: any = [
    {
      sigla: '12-4DA',
      materia: 'Ciências da Computação',
      sala: 'A314'
    },

    {
      sigla: '50-9DA',
      materia: 'Engenharia da Computação',
      sala: 'A214'
    }
  ];

  elementsHorario: any = [
    {
      horario: '07:40 - 08:30',
      segunda: '12-4DA/50-9DA',
      terca: '12-4DA/50-9DA',
      quarta: '12-4DA',
      quinta: ' ',
      sexta: ' 50-9DA',
    },

    {
      horario: '08:30 - 09:20',
      segunda: '12-4DA/50-9DA',
      terca: '12-4DA/50-9DA',
      quarta: '12-4DA',
      quinta: ' ',
      sexta: '50-9DA',
    },

    {
      horario: '09:40 - 10:30',
      segunda: ' ',
      terca: '50-9DA',
      quarta: '50-9DA',
      quinta: '12-4DA',
      sexta: '12-4DA',
    },

    {
      horario: '10:30 - 11:20',
      segunda: ' ',
      terca: '50-9DA',
      quarta: '50-9DA',
      quinta: '12-4DA',
      sexta: '12-4DA',
    }

  ];

  headElementsMateria: any = ['Sigla', 'Matéria', 'Sala'];

  headElementsHorario: any = ['Horário', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira'];

  constructor() { }

  ngOnInit() {
  }

}
