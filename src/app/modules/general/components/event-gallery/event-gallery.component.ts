import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import Swiper from 'swiper';

@Component({
  selector: 'app-event-gallery',
  templateUrl: './event-gallery.component.html',
  styleUrls: ['./event-gallery.component.scss'],
})
export class EventGalleryComponent {
  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  @ViewChild('GallerySwiper', { static: false }) GallerySwiper?: ElementRef;
  swiperInstance!: Swiper;

  images: any[] = [
    './assets/images/portfolio/1.jpg',
    './assets/images/portfolio/3.jpg',
    './assets/images/portfolio/2.png',
    './assets/images/portfolio/4.jpg',
    './assets/images/portfolio/5.jpg',
    './assets/images/portfolio/8.jpg',
    './assets/images/portfolio/9.png',
    './assets/images/portfolio/7.jpg',
    './assets/images/portfolio/6.jpg',
    './assets/images/portfolio/10.jpg',
  ];

  activeIndex: number = 1;

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        if (this.activeModal) {
          this.activeModal.close();
        }
      });
  }

  triggerNext(): void {
    this.GallerySwiper?.nativeElement.swiper.slideNext();
    if (this.activeIndex < this.images.length) {
      this.activeIndex++;
    }
  }

  triggerPrev(): void {
    this.GallerySwiper?.nativeElement.swiper.slidePrev();
    if (this.activeIndex > 1) {
      this.activeIndex--;
    }
  }

  close(): void {
    this.activeModal.close();
  }
}
