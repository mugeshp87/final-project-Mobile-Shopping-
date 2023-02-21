import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { RolebasedGuard } from './rolebased.guard';
import { RoleService } from './services/role.service';

describe('RolebasedGuard', () => {
  let guard: RolebasedGuard;
  let service: RoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
      ],
    });
    guard = TestBed.inject(RolebasedGuard);
    service = TestBed.inject(RoleService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should return true if user is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('testUser');
    spyOn(guard.service, 'isadmin');

    const result = guard.canActivate();

    expect(result).toBe(true);
    expect(guard.service.isadmin).toHaveBeenCalled();
  });
  it('should return true if admin is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('testAdmin');
    spyOn(guard.service, 'isadmin');

    const result = guard.canActivate();

    expect(result).toBe(true);
    expect(guard.service.isadmin).toHaveBeenCalled();
  });
  it('should return false if user is not logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = guard.canActivate();

    expect(result).toBe(false);
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
});
