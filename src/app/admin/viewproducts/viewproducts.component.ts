import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit,OnChanges {
  
productvalue:any;
id:any;
popup=false;
  constructor(private service:AdminserviceService) { }

ngOnChanges(): void {
  this.service.getadminproducts().subscribe(value=>{this.productvalue=value})
}
  ngOnInit() {
    this.service.getadminproducts().subscribe(value=>{this.productvalue=value})
  }
  edit(data:any){
  
  }

  delete(data:any)
  {
    this.service.deleteadminproducts(data).subscribe()
    console.log(data);
    this.ngOnChanges()
    alert("Product Deleted Successfully")
  }


}
