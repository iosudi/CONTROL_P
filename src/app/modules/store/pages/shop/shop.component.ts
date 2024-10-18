import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  rangeValues: number[] = [20, 80];

  filterOptions = [
    { label: '80x50cm', isChecked: false, quantity: 38 },
    { label: '140x70cm', isChecked: false, quantity: 95 },
    { label: '30x40cm', isChecked: false, quantity: 94 },
    { label: '60x60cm', isChecked: false, quantity: 12 },
  ];

  cities: any[] | undefined;

  selectedCity: any | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
