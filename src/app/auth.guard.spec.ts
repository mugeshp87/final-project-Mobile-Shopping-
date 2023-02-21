import { TestBed } from '@angular/core/testing';
import { UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should return true if user is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('testUser');

    const result = guard.canActivate();

    expect(result).toBe(true);
  });
  it('should return true if admin is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('testAdmin');

    const result = guard.canActivate();

    expect(result).toBe(true);
  });
  it('should redirect to login page if user is not logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(guard.toastr, 'warning');

    const result = guard.canActivate();

    expect(result).toEqual(jasmine.any(UrlTree));
    expect(guard.toastr.warning).toHaveBeenCalled();
  });
  it('should return a promise', () => {
    spyOn(localStorage, 'getItem').and.returnValue('testUser');

    const result = guard.canActivate();

    expect(result).toEqual(jasmine.any(Promise));
  });

  it('should return an observable', () => {
    spyOn(localStorage, 'getItem').and.returnValue('testUser');

    const result = guard.canActivate();

    expect(result).toEqual(jasmine.any(Observable));
  });
  it('should return false if user is not logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = guard.canActivate();

    expect(result).toBe(false);
  });
});
