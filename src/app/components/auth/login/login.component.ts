import { ConfigService } from './../../../common/services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    public config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
