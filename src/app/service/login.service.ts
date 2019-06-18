import { Injectable } from '@angular/core';
import { API_NEW_SINEF } from 'src/app/api.app';
import { Login } from 'src/app/model/login';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { Md5 } from 'ts-md5/dist/md5';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUser: User = null;
  private falsoLogado: boolean = true;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUser = JSON.parse(sessionStorage.getItem('u'));
  }

  registrarPost(user: User): Observable<User> {
    user.password = Md5.hashStr(user.password).toString();
    return this.http.post<User>(`${API_NEW_SINEF}/users`, user);
  }

  registrar(user: User) {
    this.registrarPost(user).subscribe(
      data => {
        this.currentUser = data;
        sessionStorage.setItem('u', JSON.stringify(this.currentUser));
      }
    );
  }

  logout() {
    sessionStorage.removeItem('u');
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  getUsuarioAtivo() {
    if (sessionStorage.getItem('u') !== null) {
      return sessionStorage.getItem('u');
    } else {
      return null;
    }
  }

  isLogged() {
    if (sessionStorage.getItem('u') != null) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (sessionStorage.getItem('u') != null) {
      if (this.currentUser.profile === 'admin') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  private getUserByLogin(login: string): Observable<User> {
    return this.http.get<User>(`${API_NEW_SINEF}/users?login=${login}`);
  }

  getFalsoLogado() {
    return this.falsoLogado;

  }

  login(login: string, password: string) {
    this.getUserByLogin(login).subscribe(
      data => {

        try {
          password = Md5.hashStr(password).toString();

          if (data[0].password === password) {
            this.currentUser = data[0];
            sessionStorage.setItem('u', JSON.stringify(this.currentUser));
            this.falsoLogado = true;
            this.router.navigate(['/main']);
          }else{
            this.falsoLogado = false;
          }
        } catch{
          this.falsoLogado = false;
          console.log('login não existe');
        }
      }
    );
  }
}
