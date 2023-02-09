import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { RolebasedAuthGuard } from './rolebased-auth.guard';

describe('RolebasedAuthGuard', () => {
  let guard: RolebasedAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ {
        provide: ToastrService,
        useValue:ToastrService,
      },
    ]
    });
    guard = TestBed.inject(RolebasedAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
