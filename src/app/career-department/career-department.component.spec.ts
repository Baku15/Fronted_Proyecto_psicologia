import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDepartmentComponent } from './career-department.component';

describe('CareerDepartmentComponent', () => {
  let component: CareerDepartmentComponent;
  let fixture: ComponentFixture<CareerDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerDepartmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
