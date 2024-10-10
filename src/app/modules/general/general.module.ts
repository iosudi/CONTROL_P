import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { GeneralRoutingModule } from './general-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ServicesDetailsComponent } from './pages/services-details/services-details.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

registerSwiperElements();

@NgModule({
  declarations: [
    HomeComponent,
    PartnersComponent,
    AboutComponent,
    ContactComponent,
    OurServicesComponent,
    ServicesDetailsComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    DropdownModule,
    FormsModule,
    CarouselModule,
    BreadcrumbModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GeneralModule {}
