import { Component } from '@angular/core';
import { AppArea, UiHelperService } from 'src/app/core/services/ui-helper/ui-helper.service';
import { TabStrip } from 'src/app/shared/components/subheader/tabstrip/tabstrip.component';
import { TitleActionBarButtonConfig } from 'src/app/shared/components/title-action-bar/title-action-bar.component';

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
    },
    {
      title: 'Forecasts',
      routerLink: '/cash/forecasts',
    },
    {
      title: 'Balances',
      routerLink: '/cash/balances',
    },
    {
      title: 'General ledger',
      routerLink: '/cash/general-ledger',
    },
    {
      title: 'Reconciliations',
      routerLink: '/cash/reconciliations',
    },
    {
      title: 'Statements',
      routerLink: '/cash/statements',
    },
  ];

  primaryButton: TitleActionBarButtonConfig = {
    id: "PrimaryButton", text: 'New worksheet'
  }

  secondaryButton: TitleActionBarButtonConfig = {
    id: "SecondaryButton", text: 'New forecast'
  }

  tertiaryButtons: TitleActionBarButtonConfig[] = [
    {
      id: "TertiaryOne", text: "Settings", icon: "cog"
    }
  ];

  constructor(uiHelperService: UiHelperService) {
    uiHelperService.setPropertiesFor(AppArea.Cash);
  }
}
