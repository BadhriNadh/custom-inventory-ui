import { TestBed } from '@angular/core/testing';

import { StoresApiService } from './stores-api.service';

describe('StoresApiService', () => {
  let service: StoresApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoresApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
