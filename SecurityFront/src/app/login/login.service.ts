import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

    usuario: string;
    password: string;

  login(loginForm: Data) {
    this.usuario = loginForm.username;
    this.password = loginForm.password;
    return this.http.post('api/security/login?user=' + this.usuario + '&&pass=' + this.password, loginForm);
  }
}
