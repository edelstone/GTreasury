import { Component, OnInit } from '@angular/core';
import { TickerDetails } from 'src/app/core/model/ticker-details';

@Component({
  selector: 'gt-navigation-bar-ticker',
  templateUrl: './navigation-bar-ticker.component.html',
  styleUrls: ['./navigation-bar-ticker.component.scss'],
})
export class NavigationBarTickerComponent implements OnInit {
  readonly tickerOptions = [
    {
      value: 2,
      text: "Yesterday's Balance",
    },
  ];
  
  readonly tickerDefaultOption = {
    value: 1,
    text: 'Current Balance',
  };

  tickerDetails: TickerDetails;

  constructor() {}

  ngOnInit(): void {
    // TODO:
    // Replace defaults with values loaded through service
    this.tickerDetails = new TickerDetails({
      value: 18270000.0,
      percentage: .1,
      isIncrease: true,
    });
  }
}
