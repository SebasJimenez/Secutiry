import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { TableModule } from 'primeng/table';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { MockedCreate } from 'src/app/Mocks/mock-create';
import { CreateService } from '../create.service';
import { Rol } from 'src/app/model/Rol.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: CreateService;
  const dialogMock = {
    close: () => {}
  };
  let rols: Rol[] = [
    {
      id: 1,
      name: 'Encargado'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        TableModule,
        MatDialogModule,
        DropdownModule,
        FormsModule,
        ButtonModule,
        ToastModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: CreateService, useClass: MockedCreate },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should close the dialog', () => {
    let spy = spyOn(component.dialog, 'close').and.callThrough();
    component.cancel();
    expect(component.dialog.close).toHaveBeenCalledWith();
  });

  it('should change the variable to true', () => {
    component.rols();
  });

  it('should call it on submit rol', () => {
    component.createService.rolLogged = true;
    component.createService.userLogged = false;
    component.onSubmit();
  });

  it('should call it on submit user', () => {
    component.createService.rolLogged = false;
    component.createService.userLogged = true;
    component.onSubmit();
  });

  it('should join in the gets', () => {
    component.username;
    component.name;
    component.password;
    component.email;
    component.f;
    component.nameC;
  });

  it('should get rolcons', () => {
    component.rolCons();
    const rol = component.createService.rol();
    expect(rol).toBeTruthy();
  });
});
