import { TestBed } from '@angular/core/testing';

import { LoginaccessGuard } from './loginaccess.guard';

describe('LoginaccessGuard', () => {
  let guard: LoginaccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginaccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
