import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TARTS';
  heart = false;
  ngOnInit(): void {
    AOS.init();
    setTimeout(() => {
      this.heart = true;
    }, 500);
  }

}
