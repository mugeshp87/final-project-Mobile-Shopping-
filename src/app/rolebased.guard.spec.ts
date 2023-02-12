import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { RolebasedGuard } from './rolebased.guard';

describe('RolebasedGuard', () => {
  let guard: RolebasedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ {
        provide: ToastrService,
        useValue: ToastrService,
      },]
    });
    guard = TestBed.inject(RolebasedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
