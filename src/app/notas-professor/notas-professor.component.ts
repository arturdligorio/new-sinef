import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notas-professor',
  templateUrl: './notas-professor.component.html',
  styleUrls: ['./notas-professor.component.css']
})
export class NotasProfessorComponent implements OnInit {

  aluno: string;
  loginForm: FormGroup;

  nomes: any = [

    { nome: 'Douglas Campos' },
    { nome: 'Gabriel Morais' },
    { nome: 'João Batista' },
    { nome: 'Wagner Miranda' }

  ];

  headElementsNota: any = ['Alunos', 'Faltas', 'Prova 1', 'AI', 'RSC', 'Atividades', 'Prova 2', 'Exame Espcial', 'Nota Total'];

  headElements: any = ['Matéria', 'Turma'];

  elementsHeader: any = [
    {
      materia: 'Desenvolvimento Web Front-End',
      turma: '4DA'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
