import { Component } from '@angular/core';

@Component({
  selector: 'gt-header-quick-tasks',
  templateUrl: './header-quick-tasks.component.html',
  styleUrls: ['./header-quick-tasks.component.scss'],
})
export class HeaderQuickTasksComponent {
  readonly userTaskOptions = [
    {
      value: 1,
      text: 'New payment',
    },
    {
      value: 2,
      text: 'New deal',
    },
    {
      value: 2,
      text: 'New forecast',
    },
  ];

  readonly userTaskDefaultOption = {
    value: 0,
    text: 'Quick Tasks',
  };

  constructor() {}
}
