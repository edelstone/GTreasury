import { Component } from '@angular/core';

@Component({
  selector: 'gt-grid-toolbar',
  templateUrl: './portfolios-toolbar.component.html',
  styleUrls: ['./portfolios-toolbar.component.scss']
})
export class PortfoliosToolbarComponent {

  readonly portfolios = ['My protfolio 2'];
  readonly portfoliosDefault = 'My portfolio 1';

  constructor() { }

}
