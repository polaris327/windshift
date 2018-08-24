import { Component, OnInit, Input, HostListener, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'ws-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolledDown: boolean;
  isBlueLogo: boolean;

  constructor(
    private router: Router
  ) {
    router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        if (evt.url.includes('/quote')) {
          this.isBlueLogo = true;
        } else {
          this.isBlueLogo = false;
        }
      }
    });
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  track(event: any) {
    if (window.pageYOffset > 200) {
      this.isScrolledDown = true;
    } else {
      this.isScrolledDown = false;
    }
  }
}
