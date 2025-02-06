import { TestBed } from '@angular/core/testing';

import { ZoneItemsApiService } from './zone-items-api.service';

describe('ZoneItemsApiService', () => {
  let service: ZoneItemsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneItemsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
