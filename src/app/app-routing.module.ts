import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginaccessGuard } from './loginaccess.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './Products/Products.component';
import { RolebasedGuard } from './rolebased.guard';
import { RoleService } from './services/role.service';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  {
    path: 'products',
    title: 'Products',
    component: ProductsComponent,
  },
  { path: 'login', title: 'Login', component: LoginComponent,canActivate:[LoginaccessGuard]},
  { path: 'Signup', title: 'Signup', component: SignupComponent },
  {
    path: 'aboutus',
    title: 'AboutUs',
    component: AboutusComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    title: 'Cart',
    component: CartComponent,
    canActivate: [],
  },
  {
    path: 'success',
    title: 'Success',
    component: SuccessComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    title: 'Admin',
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
