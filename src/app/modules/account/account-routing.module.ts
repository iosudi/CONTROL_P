import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDashboardComponent } from './pages/account-dashboard/account-dashboard.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'My account - Ctrl+P for advertising and modern marketing',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: AccountDashboardComponent,
      },
      {
        path: 'account-details',
        component: AccountDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
