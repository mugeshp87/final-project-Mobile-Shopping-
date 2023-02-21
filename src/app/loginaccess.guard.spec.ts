import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { LoginaccessGuard } from './loginaccess.guard';

describe('LoginaccessGuard', () => {
  let guard: LoginaccessGuard;
  let toastr: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
      ],
    });
    guard = TestBed.inject(LoginaccessGuard);
    toastr = TestBed.inject(ToastrService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should return true if user is not logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(guard.toastr, 'warning');

    const result = guard.canActivate();

    expect(result).toBe(true);
    expect(guard.toastr.warning).not.toHaveBeenCalled();
  });
  it('should return false and show a warning message if user is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('testUser');
    spyOn(guard.toastr, 'warning');

    const result = guard.canActivate();

    expect(result).toBe(false);
    expect(guard.toastr.warning).toHaveBeenCalled();
  });
  
  it('should return false and show a warning message if admin is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('testAdmin');
    spyOn(guard.toastr, 'warning');

    const result = guard.canActivate();

    expect(result).toBe(false);
    expect(guard.toastr.warning).toHaveBeenCalled();
  });
  it('should return a promise', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = guard.canActivate();

    expect(result).toEqual(jasmine.any(Promise));
  });
  it('should return an observable', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = guard.canActivate();

    expect(result).toEqual(jasmine.any(Observable));
  });
  
});
