/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from './role.service';

describe('Service: Role', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleService, {
        provide: ToastrService,
        useValue: ToastrService,
      },]
    });
  });

  it('should ...', inject([RoleService], (service: RoleService) => {
    expect(service).toBeTruthy();
  }));

});
