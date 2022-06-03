import { Component } from '@angular/core';
import { TabStrip } from 'src/app/shared/components/subheader/tabstrip/tabstrip.component';

@Component({
  selector: 'gt-cash-container',
  templateUrl: './cash-container.component.html',
  styleUrls: ['./cash-container.component.scss'],
})
export class CashContainerComponent {
  tabs: TabStrip[] = [
    {
      title: 'Approvals',
      routerLink: '/cash/worksheets',
      activeClass: 'cash-active-tab',
    },
    {
      title: 'Forecasts',
      routerLink: '/cash/forecasts',
      activeClass: 'cash-active-tab',
    },
    {
      title: 'Balances',
      routerLink: '/cash/balances',
      activeClass: 'cash-active-tab',
    },
    {
      title: 'General Ledger',
      routerLink: '/cash/generalLedger',
      activeClass: 'cash-active-tab',
    },
    {
      title: 'Reconciliations',
      routerLink: '/cash/reconciliations',
      activeClass: 'cash-active-tab',
    },
    {
      title: 'Statements',
      routerLink: '/cash/statements',
      activeClass: 'cash-active-tab',
    },
  ];

  constructor() {}
}
