/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewproductsComponent } from './viewproducts.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from '@angular/forms';

describe('ViewproductsComponent', () => {
  let component: ViewproductsComponent;
  let fixture: ComponentFixture<ViewproductsComponent>;
  let row:any;
  let event:Event;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewproductsComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
        MatToolbar,
        MatFormField,
        MatIcon,
        MatPaginator,
        MatTableDataSource,
        FormBuilder
      ],
      imports: [
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('',()=>{
    component.openDialog();
  })
  it('',()=>{
    component.editproduct(row);
  })
  it('',()=>{
    component.applyFilter(event);
  })
});
