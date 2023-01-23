import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
url="http://localhost:3000/Mobile"
constructor(private http:HttpClient,private router:Router) { }

getadminproducts(){
 return this.http.get(`${this.url}`)
}
addadminproducts(data:any){
 return this.http.post(`${this.url}`,data)
}
deleteadminproducts(data:any)
{
  return this.http.delete(`${this.url}/${data}`)
  console.log(data)
}
updateadminproducts(data:any,newdata:any)
{
  console.log(data)
  console.log(newdata)
  return this.http.put(`${this.url}/${data}`,newdata) 
}
editproduct(id:any){
  this.router.navigate(['/update'])
  return this.http.get(`${this.url}/${id}`)
}
updateproduct(data:any,id:number)
{
    return this.http.put(`${this.url}/${id}`,data)
}
deleteproduct(id:number){
    return this.http.delete(`${this.url}/${id}`)
}
} 
   