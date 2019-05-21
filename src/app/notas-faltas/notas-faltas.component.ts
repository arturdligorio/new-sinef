import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas-faltas',
  templateUrl: './notas-faltas.component.html',
  styleUrls: ['./notas-faltas.component.css']
})
export class NotasFaltasComponent implements OnInit {

  elements: any = [
    {id: 1, 
    materia: 'Fisica II', 
    prova1: '22',
    ai: '10',
    rsc: '06',
    atividades: '19',
    prova2: '24',
    exameEspecial: ' ',
    notaTotal: '81'},

    {id: 2,
    materia: 'Banco de Dados',
    prova1: '24',
    ai: '10',
    rsc: '06',
    atividades: '17',
    prova2: '28',
    exameEspecial: ' ',
    notaTotal: '85'},

    {id: 3, 
    materia: 'Desenvolvimento Web Front-End',
    prova1: '18', 
    ai: '10',
    rsc: '06',
    atividades: '20',
    prova2: '30',
    exameEspecial: ' ',
    notaTotal: '84'},

    {id: 4, 
    materia: 'Processamento Digital de Sinais' ,
    prova1: '26', 
    ai: '10',
    rsc: '06',
    atividades: '18',
    prova2: '20',
    exameEspecial: '',
    notaTotal: '80'},

  ];

  headElements: any = ['Matéria', 'Prova 1', 'AI', 'RSC', 'Atividades', 'Prova 2', 'Exame Espcial', 'Nota Total'];


  constructor() { }

  ngOnInit() {
  }

}
