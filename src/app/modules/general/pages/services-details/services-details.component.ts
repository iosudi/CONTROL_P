import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss'],
})
export class ServicesDetailsComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Services', routerLink: '/services' },
      { label: 'Professional Design' },
    ];

    this.home = { label: 'Home', routerLink: '/home' };
  }
}
