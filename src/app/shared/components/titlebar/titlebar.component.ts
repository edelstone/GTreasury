import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'gt-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss'],
})
export class TitlebarComponent implements OnInit {
  titlebarName: string
  loadingCompleteDate: Date;
  tzName: string;
  shouldDisplayDateTime: boolean = false;
  shouldDisplaySettings: boolean = false;
  shouldDisplaySecondary: boolean = false;
  shouldDisplayPrimary: boolean = false;
  constructor() {}

  ngOnInit(): void {

    // Overview Page:
    this.titlebarName = 'Overview';

    this.loadingCompleteDate = new Date();

    var tzNameTemp = new Date().toLocaleString('en', {timeZoneName:'short'}).split(' ').pop();
    // Could be undefined if the timezone is not set
    if (tzNameTemp) {
      this.tzName = tzNameTemp;
    }

    this.shouldDisplayDateTime = true;
    this.shouldDisplaySettings = true;
    this.shouldDisplaySecondary = true;
    this.shouldDisplayPrimary = true;
  }
}
