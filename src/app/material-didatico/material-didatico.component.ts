import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.css']
})
export class MaterialDidaticoComponent implements OnInit {

  elements: any = [
    {id: 1, arquivo: 'Versionamento.pdf', materia: 'Desenvolvimento Web Front-End', data: '05/04/2019'},
    {id: 2, arquivo: 'Padrões de Projeto (Design Patterns).pdf', materia: 'Desenvolvimento Web Front-End', data: '05/04/2019'},
    {id: 3, arquivo: 'Preparação do Ambiente.pdf', materia: 'Desenvolvimento Web Front-End', data: '05/04/2019'},
    {id: 4, arquivo: 'TypeScript.pdf', materia: 'Desenvolvimento Web Front-End', data: '05/04/2019'},
    {id: 5, arquivo: 'Ambiente.pdf', materia: 'Desenvolvimento Web Front-End', data: '05/04/2019'},
    {id: 6, arquivo: 'Template (Admin LTE).pdf', materia: 'Desenvolvimento Web Front-End', data: '05/04/2019'},
    {id: 7, arquivo: 'Conhecendo Angular 4.pdf', materia: 'Desenvolvimento Web Front-End', data: '05/04/2019'},
    {id: 8, arquivo: 'Primeiros Passos.pdf', materia: 'Desenvolvimento Web Front-End', data: '05/04/2019'},
    {id: 9, arquivo: 'Manipulação e renderização de telas.pdf', materia: 'Desenvolvimento Web Front-End', data: '05/04/2019'},
    {id: 10, arquivo: 'Rotas.pdf', materia: 'Desenvolvimento Web Front-End', data: '05/04/2019'},
  ];

  headElements: any = ['Nº', 'Arquivo', 'Matéria', 'Data', 'Download'];


  constructor() { }

  ngOnInit() {
  }

}
