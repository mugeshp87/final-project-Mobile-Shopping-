import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit,OnChanges{
  value: any;
  @Input('id')id=""
  product: any;
  constructor(private ser:AdminserviceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
ngOnChange():void {
this.newdata();  
}
newdata()
{
this.ser.getadminproducts().subscribe(res=>{this.product=res})
}
  ngOnInit() {
  }
}
