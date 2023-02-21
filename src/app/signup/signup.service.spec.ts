/* tslint:disable:no-unused-variable */
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { SignupService } from './signup.service';

describe('Service: Signup', () => {
  let service :SignupService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupService, HttpClient, HttpHandler],
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(SignupService)
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([SignupService], (service: SignupService) => {
    expect(service).toBeTruthy();
  }));
});
describe('getusers', () => {
  let service: SignupService;
  let httpTestingController: HttpTestingController;
  const mockUsers: any[] = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SignupService]
    });

    service = TestBed.inject(SignupService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should send a GET request to the correct URL', () => {
    const expectedUrl = 'http://localhost:3000/users';

    service.getusers().subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
  });

  it('should return an Observable<User[]>', () => {
    const mockUsers: any[] = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

    service.getusers().subscribe((users:any) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/users');
    req.flush(mockUsers);
  });
  it('should send a POST request to the correct URL', () => {
    const expectedUrl = 'http://localhost:3000/users';

    service.addusers(mockUsers).subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
  });

  it('should return an Observable<User[]>', () => {
    const mockUsers: any[] = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

    service.addusers(mockUsers).subscribe((users:any) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/users');
    req.flush(mockUsers);
  });
});
