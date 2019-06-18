import { Injectable } from '@angular/core';
import { API_NEW_SINEF } from 'src/app/api.app';
import { Login } from 'src/app/model/login';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUser: User

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('u'))

    if (this.currentUser == null) {
      this.guestUser()
    }
  }

  registrarPost(user: User): Observable<User> {
    user.password = Md5.hashStr(user.password).toString();
    return this.http.post<User>(`${API_NEW_SINEF}/users`, user);
  }

  registrar(user: User) {
    this.registrarPost(user).subscribe(
      data => {
        this.currentUser = data;
        localStorage.setItem('u', JSON.stringify(this.currentUser));
      }
    )
  }

  guestUser() {
    this.currentUser = {
      "id": 0,
      "name": "Usuário Convidado",
      "login": "",
      "password": "",
      "type": ""
    }
  }

  logout() {
    localStorage.removeItem('u');
    this.guestUser();
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  isLogged() {
    if (localStorage.getItem('u') != null) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (localStorage.getItem('u') != null) {
      if (this.currentUser.type === 'admin') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  private getUserByLogin(login: String): Observable<User> {
    return this.http.get<User>(`${API_NEW_SINEF}/users?login=${login}`)
  }

  login(login: String, password: string) {
    console.log('passou aqui 1');
    this.getUserByLogin(login).subscribe(
      data => {
        //Verificar se veio conteúdo
        if (data) {
          console.log('passou aqui');
          //Verificar se a senha é igual
          password = Md5.hashStr(password).toString();

          if (data[0].password === password) {
            this.currentUser = data[0];
            sessionStorage.setItem('u', JSON.stringify(this.currentUser));
          }
        } 
      }
    )
  }
}

