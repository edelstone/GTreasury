import { Component, OnInit } from '@angular/core';
import { TickerDetails } from 'src/app/core/model/ticker-details';

@Component({
  selector: 'gt-header-ticker',
  templateUrl: './header-ticker.component.html',
  styleUrls: ['./header-ticker.component.scss'],
})
export class HeaderTickerComponent implements OnInit {

  readonly tickerOptions = [
    {
      value: 2,
      text: "Starred worksheets",
    },
    {
      value: 3,
      text: "Another option",
    },
  ];

  readonly tickerDefaultOption = {
    value: 1,
    text: 'Current balance',
  };

  tickerDetails: TickerDetails;

  constructor() {}

  ngOnInit(): void {
    // TODO:
    // Replace defaults with values loaded through service
    this.tickerDetails = new TickerDetails({
      value: '18.27M',
      percentage: 0.1,
      isIncrease: true,
    });
  }
}
