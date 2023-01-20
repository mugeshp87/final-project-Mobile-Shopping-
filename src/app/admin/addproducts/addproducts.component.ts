import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  value:any;

  constructor(private ser:AdminserviceService,private toastr:ToastrService) { }

  ngOnInit() {
    
  }
addproducts(addproductform:NgForm)
{
this.ser.addadminproducts(addproductform.value).subscribe(data=>{this.value=data})
this.toastr.success("Product Added Successfully","",{"positionClass":"toast-top-center"})
}
}
