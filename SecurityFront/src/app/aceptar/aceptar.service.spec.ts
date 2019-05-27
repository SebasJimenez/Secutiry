import { TestBed } from '@angular/core/testing';

import { AceptarService } from './aceptar.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AceptarService', () => {
  let service: AceptarService;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AceptarService
  ],
  imports: [
      HttpClientTestingModule
  ]
  }));

  it('should be created', () => {
    service = TestBed.get(AceptarService);
    expect(service).toBeTruthy();
  });

  it('should be join to logout', () => {
    const tap = false;
    service.logout().subscribe(
      taps => expect(taps).toEqual(tap)
    );
    service.logout();
    expect(tap).toBeFalsy();
  });

  it('should be join to login', () => {
    const tap = true;
    service.login().subscribe(
      taps => expect(taps).toEqual(tap)
    );
    service.login();
    expect(tap).toBeTruthy();
  });

});
