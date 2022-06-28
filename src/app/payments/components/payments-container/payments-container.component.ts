import { Component } from '@angular/core';
import { AppArea, UiHelperService } from 'src/app/core/services/ui-helper/ui-helper.service';
import { TabStrip } from 'src/app/shared/components/subheader/tabstrip/tabstrip.component';
import { TitlebarButtonConfig } from 'src/app/shared/components/titlebar/titlebar.component';

@Component({
  selector: 'gt-payments-container',
  templateUrl: './payments-container.component.html',
  styleUrls: ['./payments-container.component.scss'],
})

export class PaymentsContainerComponent {

  tabs: TabStrip[] = [
    {
      title: 'Approvals',
      routerLink: '/payments/approvals',
    },
    {
      title: 'Extractions',
      routerLink: '/payments/extractions',
    },
    {
      title: 'Voids',
      routerLink: '/payments/voids',
    },
    {
      title: 'In-house transfers',
      routerLink: '/payments/in-house-transfers',
    },
    {
      title: 'History',
      routerLink: '/payments/history',
    },
    {
      title: 'All payments',
      routerLink: '/payments/all-payments',
    },
  ];

  primaryButton: TitlebarButtonConfig = {
    id: "PrimaryButton", text: 'New payment'
  }

  secondaryButton: TitlebarButtonConfig = {
    id: "SecondaryButton", text: 'New transfer'
  }

  tertiaryButtons: TitlebarButtonConfig[] = [
    {
      id: "TertiaryOne", text: "Settings", icon: "cog"
    },
    {
      id: "TertiaryTwo", text: "Templates", icon: "file-group"
    },
  ];

  constructor(uiHelperService: UiHelperService) {
    uiHelperService.setPropertiesFor(AppArea.Payments);
  }
}
