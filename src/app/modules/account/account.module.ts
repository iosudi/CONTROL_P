import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDashboardComponent } from './pages/account-dashboard/account-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';


@NgModule({
  declarations: [
    AccountDashboardComponent,
    ProfileComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
