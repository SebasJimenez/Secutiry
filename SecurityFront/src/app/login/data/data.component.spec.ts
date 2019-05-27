import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '../login-routing.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockedLogin } from '../mocks/mocked-login';
import { of } from 'rxjs';
import { ScreenLogComponent } from '../screen-log/screen-log.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataComponent } from './data.component';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let service: LoginService;
  const formBuilder: FormBuilder = new FormBuilder();
  let httpClientSpy: {post: jasmine.Spy};
  const lista = {
    user: 'sebas',
    pass: '1234'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DataComponent,
        ScreenLogComponent
      ],
      imports: [
        CommonModule,
        RouterTestingModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: LoginService,
          useClass: MockedLogin
        },
        {
          provide: FormBuilder,
          useValue: formBuilder
        }
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    service = new LoginService(<any> httpClientSpy);
    fixture.detectChanges();
  });

  it('should make the control required', () => {
    const control = component.loginForm.get('username');
    const controls = component.loginForm.get('password');


    control.setValue('');
    controls.setValue('');

    expect(control.valid).toBeFalsy();
    expect(controls.valid).toBeFalsy();
  });



  it('should set login property with the items returned from the server', () => {
    const form = formBuilder.group({
      user: 'sebas',
      pass: '1234'
    });
    component.loginForm = form;
    component.onSubmit();
    expect(component.loginForm).toBe(form);
  });

  it('should set login with service http 2', () => {
    const post = true;
    httpClientSpy.post.and.returnValue(of(post));
    service.login(lista).subscribe(value => {
      expect(value).toEqual(post);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
