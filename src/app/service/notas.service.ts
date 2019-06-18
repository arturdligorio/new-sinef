import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotaTotal } from '../model/nota-total';
import { Observable } from 'rxjs';
import { API_NEW_SINEF } from '../api.app';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http:HttpClient) { }

  listNotasFaltas:NotaTotal[] = [];

  private getNotasByUser(user:string): Observable<NotaTotal[]>{
    return this.http.get<NotaTotal[]>(`${API_NEW_SINEF}/notatotal?user=${user}`);
  }

  public getListNotaFalta() {
    return this.listNotasFaltas;  
  }

  getAllNotasByUser(user:string){
    this.getNotasByUser(user).subscribe(
      data =>{
        this.listNotasFaltas = data;
      }
    )
  }

}
