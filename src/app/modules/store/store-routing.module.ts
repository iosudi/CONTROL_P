import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    title: 'Shop - Ctrl+P for advertising and modern marketing',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
