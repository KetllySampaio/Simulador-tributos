import { TestBed } from '@angular/core/testing';

import { TaxCalculator } from './tax-calculator';

describe('TaxCalculator', () => {
  let service: TaxCalculator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxCalculator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
