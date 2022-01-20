import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
 {path:"about", component:AboutusComponent},
 {path:"home", component:HomeComponent},
 {path:"contacts", component:ContactsComponent},
 {path:"users", component:UsersComponent},
 {path:"products", loadChildren:()=>import('./products/products.module').then(x=>{
   return x.ProductsModule
 })},
 {path:"userdetail", component:UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
