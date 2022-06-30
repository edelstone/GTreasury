import { Component } from '@angular/core';

@Component({
  selector: 'gt-dashboard-toolbar',
  templateUrl: './dashboard-toolbar.component.html',
  styleUrls: ['./dashboard-toolbar.component.scss']
})
export class DashboardToolbarComponent {

  readonly dashboards = ['My primary dashboard', 'My secondary dashboard', 'My tertiary dashboard'];
  selectedValue = 'My primary dashboard';

  readonly entityItems: any[] = [
    { text: "Entity", items: [ { text: "Entity 1" }, { text: "Entity 2" } ] }
  ];

  readonly bankItems: any[] = [
    { text: "Entity", items: [ { text: "Entity 1" }, { text: "Entity 2" } ] }
  ];

  readonly currencyItems: any[] = [
    { text: "Entity", items: [ { text: "Entity 1" }, { text: "Entity 2" } ] }
  ];

  readonly regionItems: any[] = [
    { text: "Entity", items: [ { text: "Entity 1" }, { text: "Entity 2" } ] }
  ];

  readonly accountGroupsItems: any[] = [
    { text: "Entity", items: [ { text: "Entity 1" }, { text: "Entity 2" } ] }
  ];

  constructor() { }

}
