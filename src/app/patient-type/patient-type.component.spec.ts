import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTypeComponent } from './patient-type.component';

describe('PatientTypeComponent', () => {
  let component: PatientTypeComponent;
  let fixture: ComponentFixture<PatientTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
