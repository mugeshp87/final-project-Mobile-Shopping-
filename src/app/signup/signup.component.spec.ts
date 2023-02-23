/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let signservice: SignupService;
  let toastr: ToastrService;
  let router: Router;
  let spyAddUsers: jasmine.Spy;
  let signupform: FormGroup;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      providers: [
        HttpClient,
        FormBuilder,
        HttpHandler,
        {
          provide: SignupService,
          useValue: jasmine.createSpyObj('SignService', ['addusers']),
        },
        {
          provide: ToastrService,
          useValue: jasmine.createSpyObj('ToastrService', ['success']),
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate']),
        },
      ],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    signservice = TestBed.inject(SignupService);
    toastr = TestBed.inject(ToastrService);
    router = TestBed.inject(Router);
    spyAddUsers = signservice.addusers as jasmine.Spy;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a user, reset the form, set the JWT, show a success message, and navigate to login', () => {
    const signupForm = component.signupform;
    signupForm.setValue({
      Username: 'testuser',
      Password: 'testpassword',
      Email: '',
    });
    const response = {
      /* some mock response */
    };
    spyAddUsers.and.returnValue(of(response));

    component.registerusers();

    expect(spyAddUsers).toHaveBeenCalledWith({
      Username: 'testuser',
      Password: 'testpassword',
      Email: '',
    });
    expect(signupForm.value).toEqual({ Username: '', Password: '', Email: '' });

    expect(localStorage.getItem('LoggedInUser')).toBeDefined();
    const jwt = localStorage.getItem('LoggedInUser');
    const decodedJwt = require('jwt-decode')(jwt);
    expect(decodedJwt.Username).toEqual('testuser');
    expect(decodedJwt.role).toEqual('User');

    expect(toastr.success).toHaveBeenCalledWith('User Registered Successfully');
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
  it('should reset the form to its initial state', () => {
    component.resetform();

    expect(component.resetform()).toHaveBeenCalled();
  });
});
