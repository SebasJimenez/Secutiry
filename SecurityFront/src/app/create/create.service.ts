import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../model/Rol.model';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  rolLogged = false;
  userLogged = false;

  constructor(private http: HttpClient) { }

  public rol(): Observable<Rol[]> {
    return this.http.get<Rol[]>('api/security/roles');
  }

  public createRol(rolForm: Rol) {
    return this.http.post('api/security/rol', rolForm);
  }

  public register(registerForm: User) {
    return this.http.post('api/security/user', registerForm);
  }
}
