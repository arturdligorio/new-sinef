import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {

  elements: any = [
    {
      id: 1, materia: 'Desenvolvimento Web Front-End',
      aviso: 'Favor preencher a pesquisa sobre a disciplina. Pesquisa Anônima',
      data: '05/04/2019'},
    {
      id: 2, materia: 'Desenvolvimento Web Front-End',
      aviso: 'Data de avaliação para o dia 21/05/2019',
      data: '10/04/2019'},
    {
      id: 3, materia: 'Desenvolvimento Web Front-End',
      aviso: 'Prezados Alunos, inserir o tema e os integrantes do grupo. Não pode conter temas repetidos.',
      data: '22/04/2019'},
    {
      id: 4, materia: 'Desenvolvimento Web Front-End',
      aviso: 'Desenvolvimento Web Front-End',
      data: '29/04/2019'}
  ];

  headElements: any = ['Matéria', 'Aviso', 'Data'];


  constructor() { }

  ngOnInit() {
  }

}
