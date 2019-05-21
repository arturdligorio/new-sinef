import { Component, OnInit } from '@angular/core';
import { SidebarStruct } from 'src/app/model/sidebar-struct';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  icons: SidebarStruct [] = [
    {
      "path": "dashboard" ,
      "icon": "home",
      "name": "Área do aluno",
      "profile":"aluno" 
  
    },
    {
      "path": "horario-aula" ,
      "icon": "access_time",
      "name": "Horário de Aula",
      "profile":"aluno" 
    },
    {
      "path": "material-didatico" ,
      "icon": "book",
      "name": "Material Didático",
      "profile":"aluno" 
    },
    {
      "path": "notas-faltas" ,
      "icon": "assessment",
      "name": "Notas e Faltas",
      "profile":"aluno"
    },
    {
      "path": "calendario-academico" ,
      "icon": "calendar_today",
      "name": "Calendário Acadêmico",
      "profile":"aluno"
    },
    //-------------------------------
    {
      "path": "dashboard" ,
      "icon": "home",
      "name": "Área do professor",
      "profile":"professor"
    },
    {
      "path": "horario-professor" ,
      "icon": "access_time",
      "name": "Horário de Aula",
      "profile":"professor"
    },
    {
      "path": "notas-faltas" ,
      "icon": "home",
      "name": "Notas e Faltas",
      "profile":"professor"
    },
    {
      "path": "notas-faltas" ,
      "icon": "home",
      "name": "Notas e Faltas",
      "profile":"professor"
    }

  ]
    
  
  constructor() { }

  ngOnInit() {
  }

}
