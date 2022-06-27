import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class TitlebarButtonConfig {
  id: string;
  text: string;
  icon?: string;
}

@Component({
  selector: 'gt-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss'],
})
export class TitlebarComponent implements OnInit {
  @Input() showDateTime: boolean = false;
  @Input() primaryButton?: TitlebarButtonConfig = undefined;
  @Input() secondaryButton?: TitlebarButtonConfig = undefined;
  @Input() tertiaryButtons: TitlebarButtonConfig[] = [];

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
