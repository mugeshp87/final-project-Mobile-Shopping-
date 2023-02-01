import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
const routes: Routes = [
  {
    path: 'home',
    title: 'Admin',
    component: AdminhomeComponent,
    children: [
      { path: 'view', title: 'View', component: ViewproductsComponent },
      { path: 'add', title: 'Add', component: ViewproductsComponent },
    ],
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
