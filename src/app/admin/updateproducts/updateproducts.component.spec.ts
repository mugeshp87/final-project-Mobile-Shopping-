/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpdateproductsComponent } from './updateproducts.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UpdateproductsComponent', () => {
  let component: UpdateproductsComponent;
  let fixture: ComponentFixture<UpdateproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateproductsComponent ],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
