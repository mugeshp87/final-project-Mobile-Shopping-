import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
const routes: Routes = [
  {path:'home',component:AdminhomeComponent,
  children:[
    {path:'view',component:ViewproductsComponent,canActivate:[AuthGuard]},
    {path:'update',component:UpdateproductsComponent,canActivate:[AuthGuard]},
    {path:'add',component:AddproductsComponent,canActivate:[AuthGuard]}
  ]
},
  
 
];
 
export const AdminRoutes = RouterModule.forChild(routes);
