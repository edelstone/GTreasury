import { Component } from '@angular/core';
import { TabStrip } from 'src/app/shared/components/subheader/tabstrip/tabstrip.component';

@Component({
  selector: 'gt-financial-instruments-container',
  templateUrl: './financial-instruments-container.component.html',
  styleUrls: ['./financial-instruments-container.component.scss'],
})
export class FinancialInstrumentsContainerComponent {
  tabs: TabStrip[] = [
    {
      title: 'Portfolios',
      routerLink: '/financial-instruments/portfolios',
      activeClass: 'gt-tabstrip-active-financial-instruments',
    },
    {
      title: 'Risk analysis',
      routerLink: '/financial-instruments/risk-analysis',
      activeClass: 'gt-tabstrip-active-financial-instruments',
    },
    {
      title: 'Hedge accounting',
      routerLink: '/financial-instruments/hedge-accounting',
      activeClass: 'gt-tabstrip-active-financial-instruments',
    },
    {
      title: 'Assets and liability',
      routerLink: '/financial-instruments/assets-and-liability',
      activeClass: 'gt-tabstrip-active-financial-instruments',
    },
    {
      title: 'Facilities',
      routerLink: '/financial-instruments/facilities',
      activeClass: 'gt-tabstrip-active-financial-instruments',
    },
    {
      title: 'Fraud',
      routerLink: '/financial-instruments/fraud',
      activeClass: 'gt-tabstrip-active-financial-instruments',
    },
  ];

  constructor() {}
}
