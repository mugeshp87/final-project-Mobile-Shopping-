/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, InjectionToken } from '@angular/core';

import { AdminhomeComponent } from './adminhome.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AdminhomeComponent', () => {
  let component: AdminhomeComponent;
  let fixture: ComponentFixture<AdminhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhomeComponent ],providers:[HttpClient,HttpHandler,InjectionToken]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
