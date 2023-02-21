import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        { provide: ToastrService, useValue: { warning: () => {} } },
        { provide: Router, useValue: router },
      ],
    });
    guard = TestBed.inject(AdminGuard);
  });
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  describe('canActivate', () => {
    let toastr: ToastrService;
    let router: Router;
    beforeEach(() => {
      // Initialize guard, toastr service and router;
      toastr = TestBed.inject(ToastrService);
      router = TestBed.inject(Router);
      // guard = TestBed.createguard(Yourguard).guardInstance;
      guard = TestBed.inject(AdminGuard);
    });
    it('should return true if LoggedInAdmin is set in localStorage', () => {
      //Arrange
      spyOn(localStorage, 'getItem').and.returnValue('someValue');
      //Act
      const result = guard.canActivate();
      //Assert
      expect(result).toBeTrue();
    });
    it('should return false and redirect to home path if LoggedInAdmin is not set in localStorage', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      const result = guard.canActivate();

      expect(toastr.warning).toHaveBeenCalledWith(
        'You need to login to proceed,Kindly go and login!!!!'
      );
      expect(router.navigate).toHaveBeenCalledWith(['/home']);
      expect(result).toBeFalse();
    });
  });
});
// import { TestBed } from '@angular/core/testing';
// import { ToastrService } from 'ngx-toastr';

// import { AdminGuard } from './admin.guard';

// describe('AdminGuard', () => {
//   let guard: AdminGuard;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         {
//           provide: ToastrService,
//           useValue: ToastrService,
//         },
//       ],
//     });
//     guard = TestBed.inject(AdminGuard);
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });

// });
