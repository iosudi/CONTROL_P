import { Component } from '@angular/core';

@Component({
  selector: 'app-float-whatsapp-icon',
  templateUrl: './float-whatsapp-icon.component.html',
  styleUrls: ['./float-whatsapp-icon.component.scss'],
})
export class FloatWhatsappIconComponent {
  phoneNumber: string = '966547223203';
  message: string = 'مرحبًا، أود الاستفسار عن خدماتكم.';
  openWhatsApp(): void {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(
      this.message
    )}`;
    window.open(url, '_blank');
  }
}
