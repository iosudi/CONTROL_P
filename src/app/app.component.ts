import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageServiceService } from './core/services/language-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private languageService: LanguageServiceService
  ) {}

  title = 'CONTROL_P';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const lang = params['lang'] || 'en'; // Default to 'en' if no lang parameter
      this.languageService.setLanguage(lang);

      // Optionally update the URL to include the lang parameter if missing
    });
  }
}
