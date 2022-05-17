import { Component } from '@angular/core';

@Component({
  selector: 'gt-header-quick-tasks',
  templateUrl: './header-quick-tasks.component.html',
  styleUrls: ['./header-quick-tasks.component.scss'],
})
export class HeaderQuickTasksComponent  {
  readonly userTaskOptions = [
    {
      value: 1,
      text: 'Option 1',
    },
    {
      value: 2,
      text: 'Option 2',
    },
  ];
  
  readonly userTaskDefaultOption = {
    value: 0,
    text: 'Quick Tasks',
  };

  constructor() {}
  
}
