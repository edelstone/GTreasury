import { Component } from '@angular/core';

@Component({
  selector: 'gt-worksheets-toolbar',
  templateUrl: './worksheets-toolbar.component.html',
  styleUrls: ['./worksheets-toolbar.component.scss'],
})
export class WorksheetsToolbarComponent {
  readonly worksheets = ['My cash worksheet 2'];
  readonly worksheetsDefault = 'My cash worksheet 1';
  readonly accountsAndGroupsDefault = ['5 accounts and groups'];
  readonly tableLayout = ['User code by account', 'Date by user code', 'Date by account', 'Account by user code', 'Account by date'];
  readonly tableLayoutDefault = ['User code by date'];
  readonly ledgerType = ['Actual', 'Estimate', 'Forecast'];

  startDate = this.getStartDate();
  endDate = new Date();
  ledgerTypeDefault = ['Actual', 'Estimate'];

  constructor() {}

  public getStartDate() {
    // Start date is 7 days ago
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date;
  }
}
