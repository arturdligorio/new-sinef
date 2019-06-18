import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../service/materia.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-dashboard-professor',
  templateUrl: './dashboard-professor.component.html',
  styleUrls: ['./dashboard-professor.component.css']
})
export class DashboardProfessorComponent implements OnInit {

  headElementsMateria: any = ['Sigla', 'Matéria', 'Sala'];

  constructor(public materiaService: MateriaService, public loginService: LoginService) { }

  ngOnInit() {
    this.materiaService.getListMateriasByProfessor(this.loginService.getCurrentUser().login);
  }

}
