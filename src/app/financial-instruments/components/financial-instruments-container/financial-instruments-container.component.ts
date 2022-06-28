import { Component } from '@angular/core';
import { AppArea, UiHelperService } from 'src/app/core/services/ui-helper/ui-helper.service';
import { TabStrip } from 'src/app/shared/components/subheader/tabstrip/tabstrip.component';
import { TitleActionBarButtonConfig } from 'src/app/shared/components/title-action-bar/title-action-bar.component';

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

  primaryButton: TitleActionBarButtonConfig = {
    id: "PrimaryButton", text: 'New deal'
  }

  secondaryButton: TitleActionBarButtonConfig = {
    id: "SecondaryButton", text: 'New risk analysis'
  }

  tertiaryButtons: TitleActionBarButtonConfig[] = [
    {
      id: "TertiaryOne", text: "Settings", icon: "cog"
    },
    {
      id: "TertiaryTwo", text: "Settlements", icon: "two-way-arrows"
    },
    {
      id: "TertiaryThree", text: "Ratesets", icon: "list"
    },
    {
      id: "TertiaryFour", text: "Tasks", icon: "tasks"
    },
  ];

  constructor(uiHelperService: UiHelperService) {
    uiHelperService.setPropertiesFor(AppArea.FinancialInstruments);
  }
}
