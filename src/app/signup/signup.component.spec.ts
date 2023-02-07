/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      providers: [
        HttpClient,
        FormBuilder,
        HttpHandler,
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
      ],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
