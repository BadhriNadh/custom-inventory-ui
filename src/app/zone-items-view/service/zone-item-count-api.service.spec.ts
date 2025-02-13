import { TestBed } from '@angular/core/testing';

import { ZoneItemCountApiService } from './zone-item-count-api.service';

describe('ZoneItemCountApiService', () => {
  let service: ZoneItemCountApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneItemCountApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
