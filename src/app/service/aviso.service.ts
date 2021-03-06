import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aviso } from '../model/avisos';
import { API_NEW_SINEF } from '../api.app';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AvisoService {

  constructor(private http: HttpClient) { 
  }

  listAvisos: Aviso[] = [];

  private getAvisos(): Observable<Aviso[]>{
    return this.http.get<Aviso[]>(`${API_NEW_SINEF}/aviso`);
  }

  private getAvisosOrderByData(): Observable<Aviso[]>{
    return this.http.get<Aviso[]>(`${API_NEW_SINEF}/aviso?_sort=materia&_order=asc`);
  }

  getAllAvisos(){
    this.getAvisos().subscribe(
      data=>{
        if(data){
          this.listAvisos = data;
        }
      }

    )
  }
  getAllAvisosOrderByData(){
    this.getAvisosOrderByData().subscribe(
      data=>{
        if(data){
          this.listAvisos = data;
        }
      }

    )
  }

  getListAvisos(){
    return this.listAvisos;
  }

}

