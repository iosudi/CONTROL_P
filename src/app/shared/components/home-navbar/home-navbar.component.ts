import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/modules/authentication/pages/login/login.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss'],
})
export class HomeNavbarComponent {
  constructor(private _CartService: CartService) {}

  private modalService = inject(NgbModal);

  cartOverlayOpened: boolean = false;
  ngOnInit(): void {
    this._CartService.openedCartOverlay.subscribe({
      next: (status) => {
        this.cartOverlayOpened = status;
      },
    });
  }

  openLoginDialog() {
    const modalRef = this.modalService.open(LoginComponent, {
      centered: true,
      backdrop: 'static',
      scrollable: true,
    });
  }

  openCartOverlay(): void {
    this.cartOverlayOpened = true;
  }
}
