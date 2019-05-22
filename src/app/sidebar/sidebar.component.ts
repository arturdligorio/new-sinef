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
      path: "horario-aula" ,
      icon: "access_time",
      name: "Horário de Aula",
      profile:"aluno" 
    },
    {
      path: "material-didatico" ,
      icon: "book",
      name: "Material Didático",
      profile:"aluno" 
    },
    {
      path: "lancar-notas" ,
      icon: "assessment",
      name: "Notas e Faltas",
      profile:"aluno"
    },
    {
      path: "calendario-academico" ,
      icon: "calendar_today",
      name: "Calendário Acadêmico",
      profile:"aluno"
    },
    {
      path: "aviso" ,
      icon: "list",
      name: "Avisos",
      profile:"aluno"
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
