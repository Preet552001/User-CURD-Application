import { TestBed } from '@angular/core/testing';

import { JwtInterceptor } from './auth.interceptor';

describe('Jwt Header Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
        JwtInterceptor
      ]
  }));

  it('Jwt Interceptor should be created', () => {
    const interceptor: JwtInterceptor = TestBed.inject(JwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
