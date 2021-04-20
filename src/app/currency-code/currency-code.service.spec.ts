import { TestBed } from '@angular/core/testing';

import { CurrencyCodeService } from './currency-code.service';

describe('CurrencyCodeService', () => {
  let service: CurrencyCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
