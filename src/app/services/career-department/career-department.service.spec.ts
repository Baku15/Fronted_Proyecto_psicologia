import { TestBed } from '@angular/core/testing';

import { CareerDepartmentService } from './career-department.service';

describe('CareerDepartmentService', () => {
  let service: CareerDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
