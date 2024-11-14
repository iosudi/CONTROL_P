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
import { OurServicesService } from 'src/app/shared/services/our-services.service';
import { SiteContentService } from 'src/app/shared/services/site-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _SiteContentService: SiteContentService,
    private _OurServicesService: OurServicesService
  ) {}

  ourWork: any[] = [];
  services: any[] = [];
  reviews: any[] = [];
  productsCategories: any[] = [];

  activeCategory: number = 1;
  activeCategoryProducts: any[] = [];
  activeCategoryName: string | undefined;

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
    this.initialize();
  }

  initialize() {
    this._SiteContentService.getOurWorks().subscribe({
      next: (data) => {
        this.ourWork = data.data;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this._OurServicesService.getServices().subscribe({
      next: (data) => {
        this.services = data.data;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this._SiteContentService.getHomeProductsCategories().subscribe({
      next: (response) => {
        this.productsCategories = response.data;
        this.activeCategoryProducts = response.data[0].products;
        this.activeCategoryName = response.data[0].category.name;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this._SiteContentService.getSpecialReviews().subscribe({
      next: (reviews) => {
        this.reviews = reviews.data.slice(0, 4);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  setActiveCategory(
    categoryId: number,
    products: any,
    categoryName: string
  ): void {
    this.activeCategory = categoryId;
    this.activeCategoryProducts = products;
    this.activeCategoryName = categoryName;
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
