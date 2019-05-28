import { Injectable } from '@angular/core';
import { API_NEW_SINEF } from 'src/app/api.app';
import { Login } from 'src/app/model/login';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  listLogin: Login[] = [];



  constructor(private http: HttpClient) {
    //Para inicializar a lista
    //this.getLoginData(`${API_NEW_SINEF}/students`);
  }



  getLoginAuth(url: string ) {

    return this.getLoginData(url)

  }




  getLoginData(url: string) {
    this.getLoginUrl(url).subscribe(
      listLoginServer => {
        this.listLogin = listLoginServer;
      }

    );
  }




  getLoginUrl(url: string): Observable<Login[]> {
    return this.http.get<Login[]>(url);
  }

}
