import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuickViewComponent } from '../../components/quick-view/quick-view.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  private modalService = inject(NgbModal);

  rangeValues: number[] = [20, 80];

  pageSize: number = 8;
  currentPage = 1;

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

  openQuickViewModal() {
    this.modalService.open(QuickViewComponent, { fullscreen: true });
  }

  pageChanged(event: any): void {}
}
