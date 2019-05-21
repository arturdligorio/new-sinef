import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario-aula',
  templateUrl: './horario-aula.component.html',
  styleUrls: ['./horario-aula.component.css']
})
export class HorarioAulaComponent implements OnInit {

  elementsMateria: any = [
    {
      sigla: 1136,
      materia: 'Fisica II',
      sala: 'A314'
    },

    {
      sigla: 8254,
      materia: 'Desenvolvimento Web Front-End',
      sala: 'A214'
    },

    {
      sigla: 1147,
      materia: 'Processamento Digital de Sinais',
      sala: 'A403'
    },

    {
      sigla: 2700,
      materia: 'Banco de Dados',
      sala: 'A203'
    },
  ];

  elementsHorario: any = [
    {
      horario: '07:40 - 08:30',
      segunda: '8254',
      terca: '8254',
      quarta: '1136',
      quinta: ' ',
      sexta: ' 1147',
    },

    {
      horario: '08:30 - 09:20',
      segunda: '8254',
      terca: '8254',
      quarta: '1136',
      quinta: ' ',
      sexta: '1147',
    },

    {
      horario: '09:40 - 10:30',
      segunda: ' ',
      terca: '1147',
      quarta: '2700',
      quinta: '2700',
      sexta: '1136',
    },

    {
      horario: '10:30 - 11:20',
      segunda: ' ',
      terca: '1147',
      quarta: '2700',
      quinta: '2700',
      sexta: '1136',
    },

  ];

  headElementsMateria: any = ['Sigla', 'Matéria', 'Sala'];

  headElementsHorario: any = ['Horário', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira'];

  constructor() { }

  ngOnInit() {
  }

}
