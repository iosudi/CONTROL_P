import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public translate: TranslateService) {}
  direction: string = 'ltr'; // Default direction

  ngOnInit(): void {
    const currentLang =
      this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    this.direction = currentLang === 'ar' ? 'rtl' : 'ltr';

    this.translate.onLangChange.subscribe((event) => {
      this.direction = event.lang === 'ar' ? 'rtl' : 'ltr';
    });
  }
}
