import { TestBed } from '@angular/core/testing';
import { ConsultService } from './consult.service';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../model/User.model';
import { Rol } from '../model/Rol.model';


describe('ConsultService', () => {
  const formBuilder: FormBuilder = new FormBuilder();
  let service: ConsultService;
  let httpMock: HttpTestingController;
  const user: User[] = [{
    id: 2,
    user: 'sebas',
    password: '123',
    email: 'sebas@gmail.com',
    nameC: 'Johan Sebastian',
    rol: {
      id: 1,
      name: 'Encargado'
    }
  }];
  const rol: Rol = {
    id: 1,
    name: 'Encargado'
  };

  beforeEach(() => { TestBed.configureTestingModule({
    providers: [ ConsultService,
      {
        provide: FormBuilder,
        useValue: formBuilder
      }
    ],
    imports: [
      HttpClientTestingModule
    ],
  });
    service = TestBed.get(ConsultService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should set login with service http delete', () => {
    service.delete(user[0]).subscribe(value => {
      expect(value).toBe('observable value');
    });

    const request = httpMock.expectOne('api/security/delete?id=' + user[0].id);
    expect(request.request.method).toBe('DELETE');
  });

  it('should set rol with service http delete rol', () => {
    service.deleteRol(rol).subscribe(value => {
      expect(value).toBe('observable value');
    });

    const request = httpMock.expectOne('api/security/rol?id=' + rol.id);
    expect(request.request.method).toBe('DELETE');
  });

  it('should set login with service http get', () => {
    service.user().subscribe(value => {
      expect(value).toEqual(user);
    });

    const request = httpMock.expectOne('api/security/users');
    expect(request.request.method).toBe('GET');
    request.flush(user);
  });

  it('should set login with service http modify', () => {
    service.modify(user[0]).subscribe(value => {
      expect(value).toBe('observable value');
    });

    const request = httpMock.expectOne('api/security/user');
    expect(request.request.method).toBe('PUT');
  });

  it('should set login with service http modify rol', () => {
    service.modifyRol(rol).subscribe(value => {
      expect(value).toBe('observable value');
    });

    const request = httpMock.expectOne('api/security/rol');
    expect(request.request.method).toBe('PUT');
  });
});
