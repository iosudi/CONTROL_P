import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatWhatsappIconComponent } from './float-whatsapp-icon.component';

describe('FloatWhatsappIconComponent', () => {
  let component: FloatWhatsappIconComponent;
  let fixture: ComponentFixture<FloatWhatsappIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatWhatsappIconComponent]
    });
    fixture = TestBed.createComponent(FloatWhatsappIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
