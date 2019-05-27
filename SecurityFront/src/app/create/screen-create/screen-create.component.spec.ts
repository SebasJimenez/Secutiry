import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCreateComponent } from './screen-create.component';
import { RegisterComponent } from '../register/register.component';
import { TableModule } from 'primeng/table';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('ScreenCreateComponent', () => {
  let component: ScreenCreateComponent;
  let fixture: ComponentFixture<ScreenCreateComponent>;
  const dialogMock = {
    close: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenCreateComponent,
      RegisterComponent ],
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should ngOnInit', () => {
    component.ngOnInit();
  });

});
