import { TestBed, inject } from '@angular/core/testing';

import { ShippingStepsService } from './shipping-steps.service';

describe('ShippingStepsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingStepsService]
    });
  });

  it('should be created', inject([ShippingStepsService], (service: ShippingStepsService) => {
    expect(service).toBeTruthy();
  }));
});
