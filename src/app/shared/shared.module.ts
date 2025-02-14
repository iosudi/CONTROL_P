import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CartOverlayComponent } from './components/cart-overlay/cart-overlay.component';
import { FloatWhatsappIconComponent } from './components/float-whatsapp-icon/float-whatsapp-icon.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { MobileLinksMenuComponent } from './components/mobile-links-menu/mobile-links-menu.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';

@NgModule({
  declarations: [
    HomeNavbarComponent,
    FooterComponent,
    MobileNavbarComponent,
    MobileLinksMenuComponent,
    CartOverlayComponent,
    FloatWhatsappIconComponent,
  ],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [HomeNavbarComponent, FooterComponent, FloatWhatsappIconComponent],
})
export class SharedModule {}
