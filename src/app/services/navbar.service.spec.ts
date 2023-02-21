import { TestBed } from '@angular/core/testing';
import { NavbarService } from './navbar.service';

describe('NavbarService', () => {
  let service: NavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[NavbarService]
    });
    service = TestBed.inject(NavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return true if user is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('LoggedInUser');

    const result = service.shownav();
    
    expect(result).toBe(true);
  });
  it('should return false if admin is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('LoggedInAdmin');

    const result = service.shownav();
    
    expect(result).toBe(false);
  });
  it('should return true if localStorage is not null and no user or admin is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = service.shownav();
    
    expect(result).toBe(true);
  });
  
  it('should return false if no localStorage is available', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      throw new Error('No localStorage available');
    });
    const result = service.shownav();
    
    expect(result).toBe(false);
  });

  it('should return true if admin is logged in', () => {
   
    spyOn(localStorage, 'getItem').and.returnValue('LoggedInAdmin');

    const result = service.showadminnav();
    
    expect(result).toBe(true);
  });
  it('should return false if admin is not logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = service.showadminnav();
    
    expect(result).toBe(false);
  });
});
