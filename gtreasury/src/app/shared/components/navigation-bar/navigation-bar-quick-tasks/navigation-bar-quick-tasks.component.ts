import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-navigation-bar-quick-tasks',
  templateUrl: './navigation-bar-quick-tasks.component.html',
  styleUrls: ['./navigation-bar-quick-tasks.component.scss'],
})
export class NavigationBarQuickTasksComponent implements OnInit {
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

  ngOnInit(): void {}
}
