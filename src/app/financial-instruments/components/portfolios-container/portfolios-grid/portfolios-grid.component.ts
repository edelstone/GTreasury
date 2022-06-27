import { Component, ViewChild } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { Portfolio } from 'src/app/core/model/portfolio';
import { ActionButton } from 'src/app/shared/components/grid-action-bar/grid-action-bar.component';

@Component({
  selector: 'gt-portfolios-grid',
  templateUrl: './portfolios-grid.component.html',
  styleUrls: ['./portfolios-grid.component.scss']
})
export class PortfoliosGridComponent {

  @ViewChild('portfolioGrid') portfolioGrid: GridComponent;
  viewOptions = [
    { value: 1, text: 'View 1' },
    { value: 2, text: 'View 2' },
    { value: 3, text: 'View 3' },
  ];
  itemButton = { text: 'New Deal' };
  portfolioData: Portfolio[] = [
    {
      id: 21,
      status: 'Confirmed',
      name: 'IC Loan 3',
      type: 'Intercompany Loan',
      product: 'INTERCO_LOAN 1',
      amount: -400993.21,
      currency: 'USD',
      attachments: 5,
      start: new Date(2022, 6, 18),
      term: '5y',
      end: new Date(2027, 1, 18),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 32,
      status: 'Created',
      name: 'Interim 5',
      type: 'Loan/Deposit',
      product: 'Loan/D 1',
      amount: 20872.77,
      currency: 'USD',
      attachments: 0,
      start: new Date(2022, 6, 16),
      term: '1y',
      end: new Date(2023, 6, 16),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    },
    {
      id: 44,
      status: 'Created',
      name: 'BOFA Borrowing',
      type: 'Loan/Deposit',
      product: 'Loan/D 3',
      amount: 7002109.33,
      currency: 'EUR',
      attachments: 0,
      start: new Date(2022, 6, 15),
      term: '5y',
      end: new Date(2027, 6, 15),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 16,
      status: 'Submitted',
      name: 'IC Loan 2',
      type: 'Intercompany Loan',
      product: 'INTERCO_LOAN 1',
      amount: -1298826.33,
      currency: 'USD',
      attachments: 3,
      start: new Date(2022, 6, 14),
      term: '1y',
      end: new Date(2027, 6, 14),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 7,
      status: 'Confirmed',
      name: 'Oil purchase',
      type: 'Loan/Deposit',
      product: 'Loan/D 4',
      amount: 9102.0,
      currency: 'EUR',
      attachments: 2,
      start: new Date(2022, 6, 11),
      term: '2y',
      end: new Date(2024, 6, 11),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 19,
      status: 'Confirmed',
      name: 'Commitment fee',
      type: 'Facility Fee',
      product: 'FAC122',
      amount: 209881.76,
      currency: 'EUR',
      attachments: 0,
      start: new Date(2022, 6, 10),
      term: '6m',
      end: new Date(2022, 12, 10),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    },
    {
      id: 22,
      status: 'Confirmed',
      name: '2022 TLA Actual',
      type: 'Loan/Deposit',
      product: 'Loan/D 3',
      amount: 21.99,
      currency: 'USD',
      attachments: 1,
      start: new Date(2022, 6, 10),
      term: '3m',
      end: new Date(2022, 9, 10),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 81,
      status: 'Submitted',
      name: 'IC Loan 4',
      type: 'Intercompany Loan',
      product: 'INTERCO_LOAN 3',
      amount: -14298.0,
      currency: 'USD',
      attachments: 8,
      start: new Date(2022, 6, 9),
      term: '5y',
      end: new Date(2027, 6, 9),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    },
    {
      id: 109,
      status: 'Created',
      name: 'IC Loan 5',
      type: 'Intercompany Loan',
      product: 'INTERCO_LOAN 1',
      amount: -222000.0,
      currency: 'USD',
      attachments: 11,
      start: new Date(2022, 6, 9),
      term: '2y',
      end: new Date(2024, 6, 9),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 17,
      status: 'Confirmed',
      name: '2022 IR swap',
      type: 'IR Swap',
      product: 'IRSWAP_1',
      amount: -400993.21,
      currency: 'EUR',
      attachments: 3,
      start: new Date(2022, 6, 9),
      term: '2y',
      end: new Date(2024, 6, 9),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 27,
      status: 'Submitted',
      name: 'IC Loan 6',
      type: 'Intercompany Loan',
      product: 'INTERCO_LOAN 2',
      amount: 12391.0,
      currency: 'USD',
      attachments: 0,
      start: new Date(2022, 6, 8),
      term: '3m',
      end: new Date(2022, 9, 8),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    },
    {
      id: 28,
      status: 'Created',
      name: 'Interim 7',
      type: 'Loan/Deposit',
      product: 'DEPO_3',
      amount: 20872.77,
      currency: 'EUR',
      attachments: 4,
      start: new Date(2022, 6, 8),
      term: '6m',
      end: new Date(2022, 12, 8),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 34,
      status: 'Confirmed',
      name: 'JPMC Borrowing',
      type: 'Loan/Deposit',
      product: 'Loan/D 3',
      amount: 7002109.33,
      currency: 'EUR',
      attachments: 0,
      start: new Date(2022, 6, 8),
      term: '1y',
      end: new Date(2023, 6, 8),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    },
    {
      id: 84,
      status: 'Created',
      name: 'IC Loan 8',
      type: 'Intercompany Loan',
      product: 'INTERCO_LOAN 1',
      amount: -1298926.33,
      currency: 'USD',
      attachments: 5,
      start: new Date(2022, 6, 7),
      term: '2y',
      end: new Date(2024, 6, 7),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    },
    {
      id: 20,
      status: 'Confirmed',
      name: '2021 IR Swap',
      type: 'IR Swap',
      product: 'IRSWAP_2',
      amount: 94102.0,
      currency: 'EUR',
      attachments: 6,
      start: new Date(2022, 6, 7),
      term: '5y',
      end: new Date(2027, 6, 7),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 9,
      status: 'Confirmed',
      name: '2021 TLA Actual',
      type: 'Facility Fee',
      product: 'FAC_1',
      amount: 209881.76,
      currency: 'USD',
      attachments: 1,
      start: new Date(2022, 6, 7),
      term: '10y',
      end: new Date(2032, 6, 7),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 2,
      status: 'Created',
      name: 'BOFA 19',
      type: 'Loan/Deposit',
      product: 'Loan 4',
      amount: 42.87,
      currency: 'USD',
      attachments: 0,
      start: new Date(2022, 6, 7),
      term: '10y',
      end: new Date(2032, 6, 7),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    },
    {
      id: 14,
      status: 'Submitted',
      name: 'Test deal',
      type: 'Intercompany Loan',
      product: 'INTERCO_LOAN 1',
      amount: 1567.08,
      currency: 'EUR',
      attachments: 0,
      start: new Date(2022, 6, 7),
      term: '6m',
      end: new Date(2022, 12, 7),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    },
    {
      id: 29,
      status: 'Confirmed',
      name: 'VAN 2021',
      type: 'Intercompany Loan',
      product: 'INTERCO_LOAN 3',
      amount: 18902.74,
      currency: 'USD',
      attachments: 0,
      start: new Date(2022, 6, 6),
      term: '1y',
      end: new Date(2023, 6, 6),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 43,
      status: 'Confirmed',
      name: 'Interim 10',
      type: 'Loan/Deposit',
      product: 'Loan/D 3',
      amount: -278899.27,
      currency: 'EUR',
      attachments: 2,
      start: new Date(2022, 6, 6),
      term: '2y',
      end: new Date(2024, 6, 6),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 52,
      status: 'Confirmed',
      name: 'IC Loan 10',
      type: 'Intercompany Loan',
      product: 'INTERCO_LOAN 3',
      amount: -10367.89,
      currency: 'USD',
      attachments: 0,
      start: new Date(2022, 5, 30),
      term: '53',
      end: new Date(2025, 5, 30),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    },
    {
      id: 66,
      status: 'Confirmed',
      name: 'Interim 10',
      type: 'IR Swap',
      product: 'IRSWAP_3',
      amount: 45982.88,
      currency: 'USD',
      attachments: 2,
      start: new Date(2022, 5, 28),
      term: '5y',
      end: new Date(2027, 5, 28),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 72,
      status: 'Created',
      name: 'VAN Borrowing',
      type: 'Loan/Deposit',
      product: 'DEPO_2',
      amount: 300000.00,
      currency: 'USD',
      attachments: 0,
      start: new Date(2022, 5, 27),
      term: '6m',
      end: new Date(2022, 11, 27),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    },
    {
      id: 31,
      status: 'Confirmed',
      name: 'TBD',
      type: 'Loan/Deposit',
      product: 'Loan/D 3',
      amount: 12276.29,
      currency: 'EUR',
      attachments: 2,
      start: new Date(2022, 5, 26),
      term: '3m',
      end: new Date(2022, 8, 26),
      rate: '2.0% + 0.50%',
      frequency: 'Monthly'
    },
    {
      id: 5,
      status: 'Confirmed',
      name: 'Test deal',
      type: 'Loan/Deposit',
      product: 'DEPO_MAIN',
      amount: 3637.39,
      currency: 'EUR',
      attachments: 0,
      start: new Date(2022, 5, 24),
      term: '1y',
      end: new Date(2023, 5, 24),
      rate: '2.0% + 0.50%',
      frequency: 'Quarterly'
    }
  ];

  constructor() { }

  onActionClicked(actionButton: ActionButton) {
    switch (actionButton) {
      case ActionButton.ExportToPdf:
        this.portfolioGrid.saveAsPDF();
        break;
      case ActionButton.ExportToExcel:
        this.portfolioGrid.saveAsExcel();
        break;
      default:
        break;
    }
  }

  exportToPDF(): void {
    this.portfolioGrid.saveAsPDF();
  }

  exportToExcel(): void {
    this.portfolioGrid.saveAsExcel();
  }

}
