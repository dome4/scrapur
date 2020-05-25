import { TestBed } from '@angular/core/testing';

import { InspectService } from './inspect.service';

describe('InspectService', () => {
  let service: InspectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
