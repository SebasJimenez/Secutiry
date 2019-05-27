import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { TableModule } from 'primeng/table';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RegisterComponent } from 'src/app/create/register/register.component';
import { ScreenComponent } from '../screen/screen.component';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { User } from 'src/app/model/User.model';
import { Rol } from 'src/app/model/Rol.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConsultService } from '../consult.service';
import { MockedConsult } from 'src/app/Mocks/mocked-consult';
import { CreateService } from 'src/app/create/create.service';
import { MockedCreate } from 'src/app/Mocks/mock-create';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestModule } from 'src/app/test/test/test.module';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import { RouterTestingModule } from '@angular/router/testing';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of([true])
    };
  }
}

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  const lista: User = {
    id: 1,
    user: 'sebas',
    password: '123',
    email: 'sebas@gmail.com',
    nameC: 'Johan Sebastian',
    rol: {
      id: 1,
      name: 'Encargado'
    }
  };
  const listRol: Rol[] = [
    {
      id: 1,
      name: 'Encargado'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        RegisterComponent,
        ScreenComponent
      ],
      imports: [
        TableModule,
        MatDialogModule,
        DropdownModule,
        ToolbarModule,
        SidebarModule,
        FormsModule,
        ButtonModule,
        ToastModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        TestModule
      ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogMock },
        { provide: ConsultService, useClass: MockedConsult },
        { provide: CreateService, useClass: MockedCreate }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.u = lista;
    component.roles = listRol;
    fixture.detectChanges();
  });

  it('should start showCreate', () => {
    component.showCreate();
  });

  it('should start showModify', () => {
    component.showModify();
  });

  it('should start showDelete', () => {
    component.showDelete();
  });

  it('should start onCreate', () => {
    component.onCreate(lista);
  });

  it('should open the dialog', () => {
    component.showConfirm(lista);
  });

  it('should acept the dialog', () => {
    component.onConfirm();
    component.onRowDelete(lista);
  });

  it('should reject the dialog', () => {
    component.onReject();
  });

  it('should change the state of user', () => {
    component.users();
  });

  it('should get rol of rolcons', () => {
    component.rolCons();
    const rol = component.createService.rol();
    expect(rol).toBeTruthy();
  });

  it('should get user of usercons', () => {
    component.userCons();
    const user = component.consultService.user();
    expect(user).toBeTruthy();
  });

  it('should delete a user of a row', () => {
    component.onRowDelete(lista);
    const user = component.consultService.delete(lista);
    expect(user).toBeTruthy();
  });

  it('should register a user of a row', () => {
    component.onRegister(lista);
    const user = component.createService.register(lista);
    expect(user).toBeTruthy();
  });

  it('should modify a user of a row', () => {
    component.onModify(lista);
    const rol = component.consultService.modify(lista);
    expect(rol).toBeTruthy();
  });

  it('should create a user on row', () => {
    component.onRowAdd();
  });
});
