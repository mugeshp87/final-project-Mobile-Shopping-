/* tslint:disable:no-unused-variable */
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { SignupService } from './signup.service';

describe('Service: Signup', () => {
  let component:SignupComponent
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupService, HttpClient,HttpHandler],
    });
  });

  it('should ...', inject([SignupService], (service: SignupService) => {
    expect(service).toBeTruthy();
  }));

});
