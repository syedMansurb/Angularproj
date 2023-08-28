import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './Dashboard/dashboard.component';

const routes: Routes = [
  {path:'dashboard',component:HomepageComponent},
  {path:'login',component :LoginComponent},
  {path:'Logout',component :LogoutComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
