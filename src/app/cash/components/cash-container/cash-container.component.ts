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
      title: 'Worksheets',
      routerLink: '/cash/worksheets',
      activeClass: 'gt-tabstrip-active-cash',
    },
    {
      title: 'Forecasts',
      routerLink: '/cash/forecasts',
      activeClass: 'gt-tabstrip-active-cash',
    },
    {
      title: 'Balances',
      routerLink: '/cash/balances',
      activeClass: 'gt-tabstrip-active-cash',
    },
    {
      title: 'General ledger',
      routerLink: '/cash/general-ledger',
      activeClass: 'gt-tabstrip-active-cash',
    },
    {
      title: 'Reconciliations',
      routerLink: '/cash/reconciliations',
      activeClass: 'gt-tabstrip-active-cash',
    },
    {
      title: 'Statements',
      routerLink: '/cash/statements',
      activeClass: 'gt-tabstrip-active-cash',
    },
  ];

  constructor() {}
}
