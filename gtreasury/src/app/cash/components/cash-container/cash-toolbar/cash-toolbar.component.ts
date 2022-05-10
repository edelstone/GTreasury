import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-cash-toolbar',
  templateUrl: './cash-toolbar.component.html',
  styleUrls: ['./cash-toolbar.component.scss']
})
export class CashToolbarComponent implements OnInit {

  loadingCompleteDate: Date;
  constructor() { }

  ngOnInit(): void {
    this.loadingCompleteDate = new Date();
  }

}
