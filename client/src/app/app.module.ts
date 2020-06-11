import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonateComponent } from './donate/donate.component';
import { DrviewComponent } from './drview/drview.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RequestedItemComponent } from './requested-item/requested-item.component';
import { RequestorComponent } from './requestor/requestor.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DonateComponent,
    DrviewComponent,
    HomeComponent,
    LoginComponent,
    MaterialComponent,
    ProfileComponent,
    RegisterComponent,
    RequestedItemComponent,
    RequestorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
