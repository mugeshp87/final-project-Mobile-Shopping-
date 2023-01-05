import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './Products/Products.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'products',component:ProductsComponent},
{path:'login',component:LoginComponent},
{path:'Signup',component:SignupComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
