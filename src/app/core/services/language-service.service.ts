import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageServiceService {
  constructor() {}
  private language: string = 'ar';

  setLanguage(lang: string) {
    this.language = lang;
  }

  getLanguage(): string {
    return this.language;
  }
}
