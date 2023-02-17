import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { LoginaccessGuard } from './loginaccess.guard';

describe('LoginaccessGuard', () => {
  let guard: LoginaccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ {
        provide: ToastrService,
        useValue: ToastrService,
      },]
    });
    guard = TestBed.inject(LoginaccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
