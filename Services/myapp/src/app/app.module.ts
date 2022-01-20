import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SwathiComponent } from './swathi/swathi.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './Guards/auth.guard';
import { UnsavedGuard } from './Guards/unsaved.guard';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutUsComponent,
    SwathiComponent,
    LoginComponent,
    RegistrationComponent,
    ContactUsComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [AuthGuard, UnsavedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
