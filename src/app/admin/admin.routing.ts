import { Routes, RouterModule } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
const routes: Routes = [
  {path:'home',component:AdminhomeComponent,
  children:[
    {path:'view',component:ViewproductsComponent},
    {path:'update',component:UpdateproductsComponent},
    {path:'add',component:AddproductsComponent}
  ]
},
  
 
];
 
export const AdminRoutes = RouterModule.forChild(routes);
