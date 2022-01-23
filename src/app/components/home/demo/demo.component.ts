import { ConfigService } from './../../../common/services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit {

  constructor(
    public config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
