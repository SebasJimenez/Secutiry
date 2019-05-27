import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLogComponent } from './screen-log.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginRoutingModule } from '../login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataComponent } from '../data/data.component';

describe('ScreenLogComponent', () => {
  let component: ScreenLogComponent;
  let fixture: ComponentFixture<ScreenLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenLogComponent, DataComponent ],
      imports: [
        CommonModule,
        RouterTestingModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should ngOnInit', () => {
    component.ngOnInit();
  });
});

