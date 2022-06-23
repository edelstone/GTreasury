import { Component } from '@angular/core';
import { Portfolio } from 'src/app/core/model/portfolio';

@Component({
  selector: 'gt-grid',
  templateUrl: './portfolios-grid.component.html',
  styleUrls: ['./portfolios-grid.component.scss']
})
export class PortfoliosGridComponent {

  portfolioData: Portfolio[] = [
    {
      id: 21,
      status: 'Confirmed',
      name: 'IC Loan 3',
      type: 'Intercompany Loan',
      product: 'INTERCO_LOAN1',
      amount: -400993.21,
      currency: 'USD',
      attachments: 5,
      start: new Date(2022, 1, 18),
      term: '5y',
      end: new Date(2027, 1, 18),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    }
  ];

  constructor() { }

}
