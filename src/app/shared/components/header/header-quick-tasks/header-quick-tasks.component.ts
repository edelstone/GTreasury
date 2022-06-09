import { Component } from '@angular/core';

@Component({
  selector: 'gt-header-quick-tasks',
  templateUrl: './header-quick-tasks.component.html',
  styleUrls: ['./header-quick-tasks.component.scss'],
})
export class HeaderQuickTasksComponent {
  readonly items: any[] = [
    {
      text: "Quick task",
      items: [
        {
          text: "New payment",
          iconClass: "wallet"
        },
        {
          text: "New deal",
          iconClass: "tags"
        },
        {
          text: "New forecast",
          iconClass: "curve-chart"
        }
      ]
    }
  ];

  constructor() {}
}
