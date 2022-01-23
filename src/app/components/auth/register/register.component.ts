import { ConfigService } from './../../../common/services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(
    public config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
