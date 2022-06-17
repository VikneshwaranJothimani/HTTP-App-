import { TestBed } from '@angular/core/testing';

import { WeatherInterceptorService } from './weather-interceptor.service';

describe('WeatherInterceptorService', () => {
  let service: WeatherInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
