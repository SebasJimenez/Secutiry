import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ScreenAcepComponent } from './screen-acep.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AceptarService } from '../aceptar.service';
import { MockedAcep } from '../mock/mock-acep';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ScreenAcepComponent', () => {
  let component: ScreenAcepComponent;
  let fixture: ComponentFixture<ScreenAcepComponent>;
  let http: HttpClient;
  let mock: MockedAcep;
  let router: Router;
  let service: AceptarService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScreenAcepComponent
       ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: AceptarService,
          useClass: MockedAcep
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAcepComponent);
    component = fixture.componentInstance;
    mock = new MockedAcep(http);
    fixture.detectChanges();
  });

  it('should create app', () => {
    expect(component).toBeTruthy();
  });

});
