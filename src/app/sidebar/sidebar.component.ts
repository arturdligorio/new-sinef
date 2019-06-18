import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../service/sidebar.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(public sidebarService: SidebarService, public loginService: LoginService) { }

  ngOnInit() {
    this.sidebarService.getAllSidebar(this.loginService.getProfileUsuarioAtivo());
  }

}
