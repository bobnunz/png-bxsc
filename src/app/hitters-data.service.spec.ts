import { TestBed } from '@angular/core/testing';

import { HittersDataService } from './hitters-data.service';

describe('HittersDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HittersDataService = TestBed.get(HittersDataService);
    expect(service).toBeTruthy();
  });
});
