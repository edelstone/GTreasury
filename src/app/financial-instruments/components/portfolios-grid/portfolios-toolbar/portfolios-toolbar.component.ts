import { Component } from '@angular/core';

@Component({
  selector: 'gt-portfolios-toolbar',
  templateUrl: './portfolios-toolbar.component.html',
  styleUrls: ['./portfolios-toolbar.component.scss']
})
export class PortfoliosToolbarComponent {

  readonly portfolios = ['Adelaide\'s Portfolio', 'Ben\'s Portfolio 1', 'Ben\'s Portfolio 2', 'Maddy\'s Portfolio', 'Ziad\'s Portfolio'];
  readonly portfoliosDefault = 'Jonathan\'s Portfolio';

  constructor() { }

}
