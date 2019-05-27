import { TestBed } from '@angular/core/testing';

import { CreateService } from './create.service';
import { FormBuilder } from '@angular/forms';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../model/User.model';
import { Rol } from '../model/Rol.model';

describe('CreateService', () => {
  const formBuilder: FormBuilder = new FormBuilder();
  let service: CreateService;
  let httpMock: HttpTestingController;
  const rol: Rol[] = [{
    id: 1,
    name: 'Encargado'
  }];
  const user: User = {
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
  beforeEach(() => { TestBed.configureTestingModule({
    providers: [ CreateService,
      {
        provide: FormBuilder,
        useValue: formBuilder
      }
    ],
    imports: [
      HttpClientTestingModule
    ],
  });
    service = TestBed.get(CreateService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should set login with service http rol', () => {
    service.rol().subscribe(value => {
      expect(value).toEqual(rol);
    });

    const request = httpMock.expectOne('api/security/roles');
    expect(request.request.method).toBe('GET');
    request.flush(rol);
  });

  it('should set login with service http createRol', () => {
    service.createRol(rol[0]).subscribe(value => {
      expect(value).toBe('observable value');
    });

    const request = httpMock.expectOne('api/security/rol');
    expect(request.request.method).toBe('POST');
  });

  it('should set login with service http createUser', () => {
    service.register(user).subscribe(value => {
      expect(value).toBe('observable value');
    });

    const request = httpMock.expectOne('api/security/user');
    expect(request.request.method).toBe('POST');
  });
});
