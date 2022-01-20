import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './Guards/auth.guard';
import { UnsavedGuard } from './Guards/unsaved.guard';

const routes: Routes = [
  {path:"", redirectTo:"users", pathMatch:"full"},
  {path:"users", component:UsersComponent, canActivate:[AuthGuard]},
  {path:"about", component:AboutUsComponent, canActivate:[AuthGuard]},
  {path:"login", component:LoginComponent, canDeactivate:[UnsavedGuard]},
  {path:"registration", component:RegistrationComponent, canDeactivate:[UnsavedGuard]},
  {path:"contacts", component:ContactUsComponent, canActivate:[AuthGuard]},
  {path:"",component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
