import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetaisComponent } from './employee-detais.component';

describe('EmployeeDetaisComponent', () => {
  let component: EmployeeDetaisComponent;
  let fixture: ComponentFixture<EmployeeDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
