import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../model/materia';
import { API_NEW_SINEF } from '../api.app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http: HttpClient) { }

  listMateria: Materia[] = [];

  private getMaterias(): Observable<Materia[]>{
    return this.http.get<Materia[]>(`${API_NEW_SINEF}/materia`);
  }

  getAllMaterias(){

    this.getMaterias().subscribe(
      data =>{

        this.listMateria = data;

      }
    );


  }

  getListMatrias(){

    return this.listMateria;

  }
}
