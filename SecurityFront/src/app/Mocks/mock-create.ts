import { CreateService } from '../create/create.service';
import { User } from '../model/User.model';
import { Rol } from '../model/Rol.model';
import { Observable, of } from 'rxjs';

export class MockedCreate extends CreateService {
  users: User =
  {
    id: 2,
    user: 'sebas',
    password: '123',
    email: 'sebas@gmail.com',
    nameC: 'Johan Sebastian',
    rol: {
      id: 1,
      name: 'Encargado'
    }
  };

  rols: Rol[] = [
  {
    id: 1,
    name: 'Encargado'
  }
  ];

  rolss: Rol =
    {
      id: 1,
      name: 'Encargado'
    };

  rol(): Observable<Rol[]> {
    return of(this.rols);
  }

  createRol(rolFrom: Rol) {
    return of(this.rolss);
  }

  register(registerForm: User) {
    return of(this.users);
  }
}
