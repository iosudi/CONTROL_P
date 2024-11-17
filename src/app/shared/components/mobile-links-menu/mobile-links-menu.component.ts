import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-links-menu',
  templateUrl: './mobile-links-menu.component.html',
  styleUrls: ['./mobile-links-menu.component.scss'],
})
export class MobileLinksMenuComponent {
  constructor(private router: Router) {}

  @Input() menuOpened: boolean = false;
  @Output() menuStatusChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  closeMenu() {
    this.menuOpened = false;
    this.menuStatusChange.emit(this.menuOpened);
  }
}
