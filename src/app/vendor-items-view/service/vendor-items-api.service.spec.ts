import { TestBed } from '@angular/core/testing';

import { VendorItemsApiService } from './vendor-items-api.service';

describe('VendorItemsApiService', () => {
  let service: VendorItemsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorItemsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
