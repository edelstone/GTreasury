import { Component } from '@angular/core';

@Component({
  selector: 'gt-grid-action-bar',
  templateUrl: './grid-action-bar.component.html',
  styleUrls: ['./grid-action-bar.component.scss']
})
export class GridActionBarComponent {
  readonly viewOptions = [
    {
      value: 1,
      text: 'View 1',
    },
    {
      value: 2,
      text: 'View 2',
    },
    {
      value: 2,
      text: 'View 3',
    },
  ];

  readonly defaultItem = {
    text: "Choose view",
    value: null,
  };

  constructor() { }

}
