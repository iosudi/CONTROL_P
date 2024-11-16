import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/modules/authentication/pages/login/login.component';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss'],
})
export class HomeNavbarComponent {
  private modalService = inject(NgbModal);

  openLoginDialog() {
    const modalRef = this.modalService.open(LoginComponent, {
      centered: true,
      backdrop: 'static',
      scrollable: true,
    });
  }
}
