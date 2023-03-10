import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
const routes: Routes = [
  {
    path: 'home',
    title: 'Admin',
    component: AdminhomeComponent,
    children: [
      { path: 'view', title: 'View', component: ViewproductsComponent,},
    ],
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
