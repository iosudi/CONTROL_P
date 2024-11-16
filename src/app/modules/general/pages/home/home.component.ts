import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OurServicesService } from 'src/app/shared/services/our-services.service';
import { SiteContentService } from 'src/app/shared/services/site-content.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _SiteContentService: SiteContentService,
    private _OurServicesService: OurServicesService,
    private renderer: Renderer2
  ) {}

  @ViewChild('ourWorkSwiper', { static: false }) ourWorkSwiper?: ElementRef;
  ourWork: any[] = [];

  services: any[] = [];
  reviews: any[] = [];
  productsCategories: any[] = [];

  activeCategory: number = 1;
  activeCategoryProducts: any[] = [];
  activeCategoryName: string | undefined;

  activeSlideIndex = 0;
  dotWidth: number = 0;
  contentContainerHeight: number = 0;

  //testimonials Section Variables
  @ViewChild('dot1') dot1!: ElementRef;
  @ViewChild('dot2') dot2!: ElementRef;
  @ViewChild('dot3') dot3!: ElementRef;
  @ViewChild('dot4') dot4!: ElementRef;
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

  swiperInstance!: Swiper; // Swiper instance type

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

  onSlideChange(event: any): void {
    console.log('fasfasf');
    this.swiperInstance = event.swiper;
    this.swiperInstance?.on('slideChange', () => {
      console.log('slideChange');
    });
  }

  triggerNext(): void {
    this.ourWorkSwiper?.nativeElement.swiper.slideNext();
  }

  triggerPrev(): void {
    this.ourWorkSwiper?.nativeElement.swiper.slidePrev();
  }

  setActive(index: number): void {
    this.dotWidth = this.dot1.nativeElement.offsetWidth + 16;

    const transforms = [
      [0, 0, 0],
      [-this.dotWidth, this.dotWidth, 0],
      [-this.dotWidth * 2, this.dotWidth, this.dotWidth],
    ];

    [this.dot1, this.dot2, this.dot3, this.dot4].forEach((dot, i) => {
      this.renderer.setStyle(
        dot.nativeElement,
        'transform',
        `translateX(${transforms[index][i] || 0}px)`
      );
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
}
