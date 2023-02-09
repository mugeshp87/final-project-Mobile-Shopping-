import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { RoleService } from './role.service';

describe('RoleService', () => {
  let service: RoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ {
        provide: ToastrService,
        useValue:ToastrService,
      },
    ]
    });
    service = TestBed.inject(RoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
