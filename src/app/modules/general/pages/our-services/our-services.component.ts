import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OurServicesService } from 'src/app/shared/services/our-services.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent {
  constructor(
    private route: Router,
    private _OurServicesService: OurServicesService
  ) {}

  solutions_images = [
    './assets/images/our-services/1.png',
    './assets/images/our-services/2.png',
    './assets/images/our-services/3.png',
    './assets/images/our-services/4.png',
    './assets/images/our-services/5.png',
    './assets/images/our-services/6.png',
    './assets/images/our-services/7.png',
    './assets/images/our-services/8.png',
  ];

  services: any[] = [];

  ngOnInit(): void {
    this._OurServicesService.getServices().subscribe({
      next: (services) => {
        this.services = services.data;
      },
      error: (error) => {
        console.error('Error fetching services:', error);
      },
    });
  }

  openServiceDetails(id: number) {
    this.route.navigate(['/services', id]);
  }
}
