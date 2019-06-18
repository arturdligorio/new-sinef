import { Injectable } from '@angular/core';
import { SidebarStruct } from '../model/sidebar-struct';
import { Observable } from 'rxjs';
import { API_NEW_SINEF } from '../api.app';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { 
  }

  listSideBar: SidebarStruct[] = [];

  private getSidebars(profile:string): Observable<SidebarStruct[]>{
    return this.http.get<SidebarStruct[]>(`${API_NEW_SINEF}/sidebar?profile=${profile}`);
  }

  getListSidebar(){
    return this.listSideBar;
  }

  getAllSidebar(profile:string){
    this.getSidebars(profile).subscribe(
      data=>{
        if(data){
          this.listSideBar = data;
        }
      });
  }

}
