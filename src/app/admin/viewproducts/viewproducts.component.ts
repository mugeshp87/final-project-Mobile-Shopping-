import { Component, OnChanges, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css'],
})
export class ViewproductsComponent implements OnInit, OnChanges {
  displayedColumns: string[] = [
    'id',
    'Name',
    'Price',
    'Image',
    'Variant',
    'Action',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  productvalue: any = [];
  id: any;

  constructor(
    public service: AdminserviceService,
    public toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnChanges(): void {
    this.service.getadminproducts().subscribe(
      (value) => {
        this.productvalue = value;
      },
      (error) => {
        this.toastr.error('Error Occurs');
      }
    );
  }
  ngOnInit() {
    this.service.getadminproducts().subscribe(
      (value) => {
        this.productvalue = value;
      },
      (error) => {
        this.toastr.error('Error Occurs');
      }
    );
    this.getproducts();
  }
  openDialog() {
    this.dialog
      .open(DialogComponent, {
        width: '40%',
      })
      .afterClosed()
      .subscribe(
        (val) => {
          if (val === 'Save') {
            this.getproducts();
          }
        },
        (error) => {
          this.toastr.error('Error Occurs');
        }
      );
  }

  getproducts() {
    this.service.getadminproducts().subscribe({
      next: (res) => {
        this.productvalue = res;
        this.dataSource = new MatTableDataSource(this.productvalue);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }
  editproduct(row: any) {
    this.dialog
      .open(DialogComponent, {
        width: '40%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Update') this.getproducts();
      });
  }
  deleteproduct(id: number) {
    this.service.deleteproduct(id).subscribe((res) => {
      this.toastr.success('Product Deleted Successfully');
    });
    this.getproducts();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
