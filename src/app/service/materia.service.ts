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

  private getMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${API_NEW_SINEF}/materia`);
  }

  private getMateriasByProfessor(login: string): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${API_NEW_SINEF}/materia?professor=${login}`);
  }

  getAllMaterias() {

    this.getMaterias().subscribe(
      data => {

        this.listMateria = data;

      }
    );
  }

  getListMateriasByProfessor(login: string) {

    this.getMateriasByProfessor(login).subscribe(
      data => {
        this.listMateria = data;
      }
    );
  }

  getListMaterias() {

    return this.listMateria;

  }
}
