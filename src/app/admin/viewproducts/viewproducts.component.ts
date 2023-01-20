import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit,OnChanges {
  
productvalue:any;
id:any;

  constructor(private service:AdminserviceService,private toastr:ToastrService) { }

ngOnChanges(): void {
  this.service.getadminproducts().subscribe(value=>{this.productvalue=value})
}
  ngOnInit() {
    this.service.getadminproducts().subscribe(value=>{this.productvalue=value})
  }
  edit(data:any){
    this.service.editproduct(data.id).subscribe(value=>{this.productvalue=value});
  }

  delete(data:any)
  {
    this.service.deleteadminproducts(data).subscribe()
    console.log(data);
    this.ngOnChanges()
    alert("Product Deleted Successfully")
  }


}
