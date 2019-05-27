import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User.model';
import { Observable } from 'rxjs';
import { Rol } from '../model/Rol.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  constructor(private http: HttpClient) { }

  public user(): Observable<User[]> {
    return this.http.get<User[]>('api/security/users');
  }

  public delete(user: User) {
    return this.http.delete('api/security/delete?id=' + user.id);
  }

  public modify(user: User) {
    return this.http.put('api/security/user', user);
  }

  public deleteRol(rol: Rol) {
    return this.http.delete('api/security/rol?id=' + rol.id);
  }

  public modifyRol(rol: Rol) {
    return this.http.put('api/security/rol', rol);
  }
}
