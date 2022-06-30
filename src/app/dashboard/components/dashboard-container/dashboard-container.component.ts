import { Component } from '@angular/core';
import { AppArea, UiHelperService } from 'src/app/core/services/ui-helper/ui-helper.service';
import { TitleActionBarButtonConfig } from 'src/app/shared/components/title-action-bar/title-action-bar.component';

@Component({
  selector: 'gt-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
})
export class DashboardContainerComponent {

  primaryButton: TitleActionBarButtonConfig = {
    id: "PrimaryButton", text: 'New dashboard'
  }

  secondaryButton: TitleActionBarButtonConfig = {
    id: "SecondaryButton", text: 'Add widget'
  }

  tertiaryButtons: TitleActionBarButtonConfig[] = [
    {
      id: "TertiaryOne", text: "Manage dashboards", icon: "cog"
    }
  ];

  constructor(uiHelperService: UiHelperService) {
    uiHelperService.setPropertiesFor(AppArea.Dashboard);
  }
}
