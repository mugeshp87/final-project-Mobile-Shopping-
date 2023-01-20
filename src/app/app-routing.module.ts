import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './Products/Products.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'products',component:ProductsComponent,canActivate:[AuthGuard]},
{path:'login',component:LoginComponent},
{path:'Signup',component:SignupComponent},
{path:'aboutus',component:AboutusComponent,canActivate:[AuthGuard]},
{path:'cart',component:CartComponent,canActivate:[AuthGuard]},
{path:'success',component:SuccessComponent,canActivate:[AuthGuard]},
{path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule),canActivate:[AuthGuard]},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
