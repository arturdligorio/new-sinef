import { Component, OnInit } from '@angular/core';
import { NotasService } from '../service/notas.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public notasService: NotasService, private loginService:LoginService) { }

  ngOnInit() {
    this.notasService.getAllNotasByUser(this.loginService.getCurrentUser().login);
  }

}
