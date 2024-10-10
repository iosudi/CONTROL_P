import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { LoginComponent } from 'src/app/modules/authentication/pages/login/login.component';
import { RegisterComponent } from 'src/app/modules/authentication/pages/register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities: any[] | undefined;

  selectedCity: any | undefined;
  private modalService = inject(NgbModal);

  //testimonials Section Variables
  @ViewChild('testimonialsCarousel', { static: false })
  testimonialsCarousel!: CarouselComponent;
  @ViewChild('testimonialsDot1') testimonialsDot1!: ElementRef;
  @ViewChild('testimonialsDot2') testimonialsDot2!: ElementRef;
  @ViewChild('testimonialsDot3') testimonialsDot3!: ElementRef;
  @ViewChild('testimonialsDot4') testimonialsDot4!: ElementRef;
  testimonialsIndex: number = 0;
  dotHeight: number = 0;
  testimonialsOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false,
  };

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  openLoginDialog() {
    const modalRef = this.modalService.open(LoginComponent, {
      centered: true,
      backdrop: 'static',
      scrollable: true,
    });
  }
  openRegisterDialog() {
    const modalRef = this.modalService.open(RegisterComponent, {
      centered: true,
      backdrop: 'static',
      size: 'md',
      scrollable: true,
    });
  }
}
