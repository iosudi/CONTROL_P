import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';

@NgModule({
  declarations: [HomeNavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeNavbarComponent, FooterComponent],
})
export class SharedModule {}
