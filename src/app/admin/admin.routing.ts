import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path:'home',title:"Admin",component:AdminhomeComponent,
  children:[
    {path:'view',title:'View',component:ViewproductsComponent},
    {path:'update',title:'Update',component:UpdateproductsComponent}, 
    {path:'add',title:'Add',component:AddproductsComponent},
    {path:'',redirectTo:'admin/home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}
  ]
},
  
 
];
 
export const AdminRoutes = RouterModule.forChild(routes);
