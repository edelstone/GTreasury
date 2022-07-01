import { Component } from '@angular/core';
import { SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';

@Component({
  selector: 'gt-dashboard-tile-layout',
  templateUrl: './dashboard-tile-layout.component.html',
  styleUrls: ['./dashboard-tile-layout.component.scss']
})
export class DashboardTileLayoutComponent {

  readonly favoriteWorksheetsData = [
    {
      title: 'CARRY FORWARD',
      description: 'carry forward example TD 2022-01-10'
    },
    {
      title: 'CASH TARGET B',
      description: 'Cash with target balance'
    },
    {
      title: 'CASH BALANCE',
      description: 'Cash balancing worksheet'
    },
  ]

  readonly jobStatusErrorsData = [
    {
      jobId: 3130,
      description: 'GL AcmeGT Payment Import - Credit Template.csv',
      jobStopped: 'Yes'
    },
    {
      jobId: 3093,
      description: 'ACMEGT - Payment Import.csv',
      jobStopped: 'No'
    },
    {
      jobId: 2899,
      description: 'CITIZENS_FT.TXT',
      jobStopped: 'No'
    },
  ]

  readonly closingBalanceData = [
    {
      kind: "60",
      share: 16.6,
    },
    {
      kind: "60",
      share: 16.6,
    },
    {
      kind: "60",
      share: 16.6,
    },
    {
      kind: "60",
      share: 16.6,
    },
    {
      kind: "60",
      share: 16.6,
    },
    {
      kind: "60",
      share: 16.6,
    },
  ];

  readonly timePeriod = ['DAY', 'WEEK', 'MONTH', 'YEAR'];
  selectedTimePeriod = 'DAY';

  readonly numberOfDays = ['7 DAYS', '30 DAYS', '90 DAYS', '365 DAYS'];
  selectedNumberOfDays = '7 DAYS';

  readonly exposure = ['On balance sheet', 'Off balance sheet'];
  selectedExposure = 'On balance sheet';

  constructor() { }

  public labelContent(e: SeriesLabelsContentArgs): string {
    return e.category;
  }
}
