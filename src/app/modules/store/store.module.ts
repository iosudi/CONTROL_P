import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { ShopComponent } from './pages/shop/shop.component';
import { StoreRoutingModule } from './store-routing.module';
registerSwiperElements();

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SliderModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    NgxPaginationModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StoreModule {}
