import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDashboardComponent } from './pages/account-dashboard/account-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AccountDashboardComponent,
    ProfileComponent,
    AccountDetailsComponent,
    OrdersComponent,
    AddressesComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
