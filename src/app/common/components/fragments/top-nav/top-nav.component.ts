import { ConfigService } from './../../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass']
})
export class TopNavComponent implements OnInit {

  constructor(
    public router: Router,
    public config: ConfigService
  ) {
    router.events.subscribe((event: any) => {
      if(event instanceof NavigationStart)
        this.config.mobileMenu = false;
    });
   }

  ngOnInit(): void {
  }

}
