import { ConsultService } from '../consult/consult.service';
import { of, Observable } from 'rxjs';
import { User } from '../model/User.model';
import { Rol } from '../model/Rol.model';

export class MockedConsult extends ConsultService {
  us: User[] = [
    {
      id: 1,
      user: 'sebas',
      password: '123',
      email: 'sebas@gmail.com',
      nameC: 'Johan Sebastian',
      rol: {
        id: 1,
        name: 'Encargado'
      }
    }
  ];
  users: User =
  { id: 2,
    user: 'sebas',
    password: '123',
    email: 'sebas@gmail.com',
    nameC: 'Johan Sebastian',
    rol: {
      id: 1,
      name: 'Encargado'
    }
  };

  rol: Rol =
  {
    id: 1,
    name: 'Encargado'
  };

  user(): Observable<User[]> {
    return of(this.us);
  }

  delete(user: User) {
    return of(this.users);
  }

  modify(user: User) {
    return of(this.users);
  }

  deleteRol(rol: Rol) {
    return of(this.rol);
  }

  modifyRol(rol: Rol) {
    return of(this.rol);
  }
}
