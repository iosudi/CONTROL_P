import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SiteContentService } from 'src/app/shared/services/site-content.service';
import { ProjectDetailsComponent } from '../../components/project-details/project-details.component';
import { EventGalleryComponent } from './../../components/event-gallery/event-gallery.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  constructor(private _SiteContentService: SiteContentService) {}
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

  projects: any[] = [];
  projectImages: any[] = [];

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this._SiteContentService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects.data;
      },
      error: (error) => {
        console.error('Error retrieving projects:', error);
      },
    });
  }

  eventGallery(projectImages: any) {
    const modalRef = this.modalService.open(EventGalleryComponent, {
      fullscreen: true,
      scrollable: true,
    });

    modalRef.componentInstance.images = projectImages;
  }

  viewProject() {
    this.modalService.open(ProjectDetailsComponent, {
      fullscreen: true,
      scrollable: true,
    });
  }
}
