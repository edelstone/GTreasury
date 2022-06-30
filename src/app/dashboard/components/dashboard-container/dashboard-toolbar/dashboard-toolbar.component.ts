import { Component } from '@angular/core';

@Component({
  selector: 'gt-dashboard-toolbar',
  templateUrl: './dashboard-toolbar.component.html',
  styleUrls: ['./dashboard-toolbar.component.scss']
})
export class DashboardToolbarComponent {

  readonly dashboards = ['My primary dashboard', 'My second dashboard', 'My third dashboard'];
  selectedValue = 'My primary dashboard';

  readonly entityItems: any[] = [
    { text: "Entity", items: [ { text: "Entity 1" }, { text: "Entity 2" } ] }
  ];

  readonly bankItems: any[] = [
    { text: "Bank", items: [ { text: "Bank 1" }, { text: "Bank 2" } ] }
  ];

  readonly currencyItems: any[] = [
    { text: "Currency", items: [ { text: "Currency 1" }, { text: "Currency 2" } ] }
  ];

  readonly regionItems: any[] = [
    { text: "Region", items: [ { text: "Region 1" }, { text: "Region 2" } ] }
  ];

  readonly accountGroupsItems: any[] = [
    { text: "Account groups", items: [ { text: "Account group 1" }, { text: "Account group 2" } ] }
  ];

  constructor() { }

}
