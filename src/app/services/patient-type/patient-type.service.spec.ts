import { TestBed } from '@angular/core/testing';

import { PatientTypeService } from './patient-type.service';

describe('PatientTypeService', () => {
  let service: PatientTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
