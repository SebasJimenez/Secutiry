import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableRolComponent } from './table-rol.component';
import { TableModule } from 'primeng/table';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { Rol } from 'src/app/model/Rol.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestModule } from 'src/app/test/test/test.module';
import { RegisterComponent } from 'src/app/create/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultService } from '../consult.service';
import { MockedConsult } from 'src/app/Mocks/mocked-consult';
import { CreateService } from 'src/app/create/create.service';
import { MockedCreate } from 'src/app/Mocks/mock-create';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import { RouterTestingModule } from '@angular/router/testing';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of(['success'])
    };
  }
}

describe('TableRolComponent', () => {
  let component: TableRolComponent;
  let fixture: ComponentFixture<TableRolComponent>;
  const list: Rol = {
    id: 1,
    name: 'Encargado'
  };
  let dialog: MatDialogMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableRolComponent,
        RegisterComponent
      ],
      imports: [
        TableModule,
        MatDialogModule,
        ToolbarModule,
        SidebarModule,
        DropdownModule,
        FormsModule,
        ButtonModule,
        ToastModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        TestModule,
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
    fixture = TestBed.createComponent(TableRolComponent);
    component = fixture.componentInstance;
    component.u = list;
    fixture.detectChanges();
    dialog = TestBed.get(MatDialogRef);
  });

  it('should get rol of rolcons', () => {
    component.rolCons();
    const rol = component.createService.rol();
    expect(rol).toBeTruthy();
  });

  it('should create a rol', () => {
    component.createRol(list);
    const rol = component.createService.createRol(list);
    expect(rol).toBeTruthy();
  });

  it('should create a rol', () => {
    component.onModify(list);
    const rol = component.consultService.modifyRol(list);
    expect(rol).toBeTruthy();
  });

  it('should delete a rol of a row', () => {
    component.onRowDelete(list);
    const rol = component.consultService.deleteRol(list);
    expect(rol).toBeTruthy();
  });

  it('should create a rol of a row', () => {
    component.onRowAdd();
    spyOn(dialog, 'open').and.callThrough();
  });

  it('should open the dialog', () => {
    component.showConfirm(list);
  });

  it('should acept the dialog', () => {
    component.onConfirm();
    component.onRowDelete(list);
  });

  it('should reject the dialog', () => {
    component.onReject();
  });

});
