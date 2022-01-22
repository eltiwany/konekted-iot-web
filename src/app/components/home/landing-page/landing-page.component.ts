import { ConfigService } from './../../../common/services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {
  constructor(
    public config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
