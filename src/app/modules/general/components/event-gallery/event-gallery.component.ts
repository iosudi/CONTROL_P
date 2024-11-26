import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import Swiper from 'swiper';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-event-gallery',
  templateUrl: './event-gallery.component.html',
  styleUrls: ['./event-gallery.component.scss'],
})
export class EventGalleryComponent {
  constructor(public activeModal: NgbActiveModal, private router: Router) {}
  private modalService = inject(NgbModal);

  @ViewChild('GallerySwiper', { static: false }) GallerySwiper?: ElementRef;
  swiperInstance!: Swiper;

  @Input() images: any[] = [];

  thumbnailsBreakpoints = {
    0: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 6.5,
      spaceBetween: 20,
    },
    1399: {
      slidesPerView: 7.5,
      spaceBetween: 20,
    },
  };

  activeIndex: number = 1;

  ngOnInit(): void {
    console.log(this.images);
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

  viewProject() {
    this.modalService.open(ProjectDetailsComponent, {
      fullscreen: true,
      scrollable: true,
    });
    this.activeModal.close();
  }

  close(): void {
    this.activeModal.close();
  }
}
