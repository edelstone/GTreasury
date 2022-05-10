import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-worksheets-toolbar',
  templateUrl: './worksheets-toolbar.component.html',
  styleUrls: ['./worksheets-toolbar.component.scss']
})
export class WorksheetsToolbarComponent implements OnInit {
  readonly worksheets = ["My cash worksheet 2"];
  readonly worksheetsDefaultOption = 'My cash worksheet 1';
  readonly accountsAndGroups = ['Option A', 'Option B', 'Option C'];
  readonly codeByDate = ['User code by date'];
  readonly ledgerType = ['Actual', 'Estimate', 'Forecast'];

  startDate = new Date(2022, 0, 17);
  endDate = new Date(2022, 0, 23);

  constructor() { }

  ngOnInit(): void {
  }

}
