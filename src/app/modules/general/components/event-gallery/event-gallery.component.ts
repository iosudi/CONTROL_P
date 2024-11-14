import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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

  @Input() images: any[] = [];

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
