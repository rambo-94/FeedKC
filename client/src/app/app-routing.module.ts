import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {DrviewComponent} from "./drview/drview.component";
import {DonateComponent} from "./donate/donate.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {RequestorComponent} from "./requestor/requestor.component";
import {RequestedItemComponent} from "./requested-item/requested-item.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },

  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'dashboard/:username',
    component: DrviewComponent,
    children:[
      {
        path: 'donate',
        component: DonateComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent,
      },{
        path:'profile',
        component:ProfileComponent
      }
    ]},
  {
    path:'requester/:username',
    component:RequestorComponent
  },
  {
    path:'cart',
    component:RequestedItemComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
