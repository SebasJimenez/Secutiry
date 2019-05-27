import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRegComponent } from './screen-reg.component';

describe('ScreenRegComponent', () => {
  let component: ScreenRegComponent;
  let fixture: ComponentFixture<ScreenRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should run to ngOnInit', () => {
    component.ngOnInit();
  });
});
