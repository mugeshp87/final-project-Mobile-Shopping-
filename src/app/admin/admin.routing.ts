import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
const routes: Routes = [
  {path:'home',component:AdminhomeComponent},
  {path:'view',component:ViewproductsComponent}
];
 
export const AdminRoutes = RouterModule.forChild(routes);
