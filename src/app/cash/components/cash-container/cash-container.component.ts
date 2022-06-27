import { Component } from '@angular/core';
import { AppArea, UiHelperService } from 'src/app/core/services/ui-helper/ui-helper.service';
import { TabStrip } from 'src/app/shared/components/subheader/tabstrip/tabstrip.component';
import { TitlebarButtonConfig } from 'src/app/shared/components/titlebar/titlebar.component';

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

  primaryButton: TitlebarButtonConfig = {
    id: "PrimaryButton", text: 'New worksheet'
  }

  secondaryButton: TitlebarButtonConfig = {
    id: "SecondaryButton", text: 'New forecast'
  }

  tertiaryButtons: TitlebarButtonConfig[] = [
    {
      id: "TertiaryOne", text: "Settings", icon: "cog"
    }
  ];

  constructor(uiHelperService: UiHelperService) {
    uiHelperService.setPropertiesFor(AppArea.Cash);
  }
}
