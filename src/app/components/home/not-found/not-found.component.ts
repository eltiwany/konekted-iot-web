import { ConfigService } from './../../../common/services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {

  constructor(
    public config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
