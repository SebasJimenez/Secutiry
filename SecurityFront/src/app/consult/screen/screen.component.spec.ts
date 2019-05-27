import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenComponent } from './screen.component';
import { TableComponent } from '../table/table.component';
import { TableModule } from 'primeng/table';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
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
describe('ScreenComponent', () => {
  let component: ScreenComponent;
  let fixture: ComponentFixture<ScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenComponent, TableComponent ],
      imports: [
        TableModule,
        MatDialogModule,
        DropdownModule,
        FormsModule,
        ToolbarModule,
        SidebarModule,
        RouterTestingModule,
        ButtonModule,
        ToastModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should ngOnInit', () => {
    component.ngOnInit();
  });
});
