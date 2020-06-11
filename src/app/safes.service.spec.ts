import { TestBed } from '@angular/core/testing';

import { SafesService } from './safes.service';

describe('SafesService', () => {
  let service: SafesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
