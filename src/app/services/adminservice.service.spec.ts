/* tslint:disable:no-unused-variable */

import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { AdminserviceService } from './adminservice.service';

describe('Service: Adminservice', () => {
  let service:AdminserviceService;
  let data :any;
  let http:HttpClient;
  let newdata:any;
  let id:any;
  let id1:number;
  let  url = 'http://localhost:3000/Mobile';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminserviceService, HttpClient, HttpHandler],
    });
  });

  it('should ...', inject(
    [AdminserviceService],
    (service: AdminserviceService) => {
      expect(service).toBeTruthy();
    }
  ));
 
});
