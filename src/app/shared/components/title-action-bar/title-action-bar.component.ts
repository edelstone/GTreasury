import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class TitleActionBarButtonConfig {
  id: string;
  text: string;
  icon?: string;
}

@Component({
  selector: 'gt-title-action-bar',
  templateUrl: './title-action-bar.component.html',
  styleUrls: ['./title-action-bar.component.scss'],
})
export class TitleActionBarComponent implements OnInit {
  @Input() showDateTime: boolean = false;
  @Input() primaryButton?: TitleActionBarButtonConfig = undefined;
  @Input() secondaryButton?: TitleActionBarButtonConfig = undefined;
  @Input() tertiaryButtons: TitleActionBarButtonConfig[] = [];

  @Output() actionClicked = new EventEmitter<string>();

  loadingCompleteDate: Date;
  tzName: string;

  constructor() {}

  ngOnInit(): void {
    if (this.showDateTime) {
      this.loadingCompleteDate = new Date();

      var tzNameTemp = new Date().toLocaleString('en', {timeZoneName:'short'}).split(' ').pop();
      // Could be undefined if the timezone is not set
      if (tzNameTemp) {
        this.tzName = tzNameTemp;
      }
    }
  }
}
