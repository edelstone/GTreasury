import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-cash-titlebar',
  templateUrl: './cash-titlebar.component.html',
  styleUrls: ['./cash-titlebar.component.scss'],
})
export class CashTitlebarComponent implements OnInit {
  loadingCompleteDate: Date;
  constructor() {}

  ngOnInit(): void {
    this.loadingCompleteDate = new Date();
  }
}
