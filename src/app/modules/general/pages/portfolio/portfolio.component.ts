import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailsComponent } from '../../components/project-details/project-details.component';
import { EventGalleryComponent } from './../../components/event-gallery/event-gallery.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  private modalService = inject(NgbModal);

  images: any[] = [
    './assets/images/portfolio/1.jpg',
    './assets/images/portfolio/3.jpg',
    './assets/images/portfolio/2.png',
    './assets/images/portfolio/4.jpg',
    './assets/images/portfolio/5.jpg',
    './assets/images/portfolio/11.gif',
    './assets/images/portfolio/8.jpg',
    './assets/images/portfolio/9.png',
    './assets/images/portfolio/7.jpg',
    './assets/images/portfolio/6.jpg',
    './assets/images/portfolio/10.jpg',
  ];

  eventGallery() {
    this.modalService.open(EventGalleryComponent, {
      fullscreen: true,
      scrollable: true,
    });
  }

  viewProject() {
    this.modalService.open(ProjectDetailsComponent, {
      fullscreen: true,
      scrollable: true,
    });
  }
}
