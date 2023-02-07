import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
      ],
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
