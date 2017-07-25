import { TestBed, inject } from '@angular/core/testing';

import { ForecastpingService } from './forecastping.service';

describe('ForecastpingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForecastpingService]
    });
  });

  it('should be created', inject([ForecastpingService], (service: ForecastpingService) => {
    expect(service).toBeTruthy();
  }));
});
