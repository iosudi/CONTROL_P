import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { OurServicesService } from 'src/app/shared/services/our-services.service';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss'],
})
export class ServicesDetailsComponent implements OnInit {
  constructor(
    private _OurServicesService: OurServicesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  serviceDetails: any;

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.items = [
      { label: 'Services', routerLink: '/services' },
      { label: 'Professional Design' },
    ];

    this.home = { label: 'Home', routerLink: '/home' };

    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        if (params.get('id')) {
          this.initializeServiceDetails(Number(params.get('id')));
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  initializeServiceDetails(id: number) {
    this._OurServicesService.getServiceById(id).subscribe((data) => {
      this.serviceDetails = data.data;
    });
  }
}
