import { Component, inject, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { EventGalleryComponent } from '../event-gallery/event-gallery.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  private modalService = inject(NgbModal);

  constructor(public activeModal: NgbActiveModal, private router: Router) {
    this.events = [
      {
        status: 'يوم التأسيس السعودي',
        description: '  23 - 9 - 2023   ',
      },
      {
        status: 'نظرة عامة على المشروع',
        description:
          'تم تكليفنا بتنظيم حدث ضخم بمناسبة "يوم التأسيس السعودي"، والذي يعكس تراث المملكة وثقافتها الغنية. تمحور التحدي حول تصميم وتنفيذ تجربة متكاملة، تشمل العروض المرئية والتقنيات الحديثة، التي تعبر عن الهوية الوطنية.',
      },
      {
        status: 'النهج الذي اتبعناه',
        description:
          'بدأنا بتطوير خطة تصميم متكاملة بالتعاون مع العميل لتجسيد رؤية "يوم التأسيس". تضمنت العملية تصميم الديكورات التراثية، إعدادات المسرح، استخدام الشاشات الرقمية، والتقنيات الحديثة مثل الإسقاط المرئي (projection mapping) لتجسيد التاريخ والرموز الوطنية.',
      },
      {
        status: 'أهم الميزات',
        description: `تصاميم الديكور:
تم تصميم الديكورات بأسلوب مستوحى من التراث السعودي، باستخدام الزخارف والألوان الوطنية.

الإسقاط المرئي:
استخدمنا تقنية الإسقاط المرئي لعرض لقطات من تاريخ المملكة على جدران المكان، مما أضفى طابعًا مميزًا على الحدث.

الأداء التفاعلي:
تضمن الحدث عروضًا حية ومسرحية تحكي قصة تأسيس المملكة، بمشاركة فرق محلية ودولية.`,
      },
      {
        status: 'النتائج',
        description:
          'حقق الحدث نجاحًا كبيرًا، حيث حضره أكثر من [عدد الحضور] شخص، وتمت تغطيته إعلاميًا بشكل واسع في وسائل الإعلام المحلية والدولية. استطاع الحدث ترك بصمة قوية لدى الجمهور، وتم الاعتراف به كواحد من أفضل الفعاليات للاحتفال بالتراث السعودي.',
      },
      {
        status: 'شهادة العميل',
        description: '',
      },
    ];

    this.eventsWithIndex = this.events.map((event, index) => ({
      ...event,
      index,
    }));

    console.log(
      '🚀 ~ ProjectDetailsComponent ~ this.eventsWithIndex=this.events.map ~ eventsWithIndex:',
      this.eventsWithIndex
    );
  }

  events: any[];
  eventsWithIndex: any[];

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        if (this.activeModal) {
          this.activeModal.close();
        }
      });
  }

  eventGallery() {
    this.modalService.open(EventGalleryComponent, {
      fullscreen: true,
      scrollable: true,
    });
  }
}
