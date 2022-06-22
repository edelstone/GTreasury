import { Component } from '@angular/core';
import { AppArea, UiHelperService } from 'src/app/core/services/ui-helper/ui-helper.service';
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
    },
    {
      title: 'Risk analysis',
      routerLink: '/financial-instruments/risk-analysis',
    },
    {
      title: 'Hedge accounting',
      routerLink: '/financial-instruments/hedge-accounting',
    },
    {
      title: 'Assets and liability',
      routerLink: '/financial-instruments/assets-and-liability',
    },
    {
      title: 'Facilities',
      routerLink: '/financial-instruments/facilities',
    },
    {
      title: 'Fraud',
      routerLink: '/financial-instruments/fraud',
    },
  ];

  constructor(uiHelperService: UiHelperService) {
    uiHelperService.setPropertiesFor(AppArea.FinancialInstruments);
  }
}
