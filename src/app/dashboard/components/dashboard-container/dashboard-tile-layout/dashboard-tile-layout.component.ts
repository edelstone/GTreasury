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
      description: 'Carry forward example TD 2022-06-10'
    },
    {
      title: 'CASH TARGET B',
      description: 'Cash with target balance entity X'
    },
    {
      title: 'CASH BALANCE',
      description: 'Cash balancing worksheet'
    },
    {
      title: 'FI Cash Inherit',
      description: 'Cash inherited 2022-07-01'
    },
    {
      title: 'B SERIES FUNDING',
      description: 'Funding round B with entity Y'
    },
    {
      title: 'Sample data',
      description: 'Cash worksheet 01'
    },
    {
      title: 'Another sample',
      description: 'Sample cash balancing worksheet'
    },
    {
      title: 'CASH TARGET C',
      description: 'Targeting C funds Citizens Bank'
    },
    {
      title: 'CASH TARGET X',
      description: 'Targeting X funds'
    }
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
    {
      jobId: 639,
      description: 'GL Credit Template.csv',
      jobStopped: 'Yes'
    },
    {
      jobId: 2096,
      description: 'Bank Leumi X1',
      jobStopped: 'No'
    },
    {
      jobId: 4444,
      description: 'PRT.4000.XT',
      jobStopped: 'No'
    },
    {
      jobId: 3019,
      description: 'Bank of Spain recruitment',
      jobStopped: 'Yes'
    },
    {
      jobId: 18399,
      description: 'Payment import 401',
      jobStopped: 'No'
    },
    {
      jobId: 33,
      description: 'CITIZENS_FT_1000.CSV',
      jobStopped: 'No'
    }
  ]

  readonly closingBalanceData = [
    {
      kind: "Figure 1",
      share: 20,
    },
    {
      kind: "Figure 2",
      share: 30,
    },
    {
      kind: "Figure 3",
      share: 10,
    },
    {
      kind: "Figure 4",
      share: 8,
    },
    {
      kind: "Figure 5",
      share: 28,
    },
    {
      kind: "Figure 6",
      share: 4,
    },
  ];

  readonly timePeriod1 = ['DAY', 'WEEK', 'MONTH', 'YEAR'];
  selectedTimePeriod1 = 'DAY';

  readonly timePeriod2 = ['DAY', 'WEEK', 'MONTH', 'YEAR'];
  selectedTimePeriod2 = 'DAY';

  readonly numberOfDays1 = ['7 DAYS', '30 DAYS', '90 DAYS', '365 DAYS'];
  selectedNumberOfDays1 = '7 DAYS';

  readonly numberOfDays2 = ['7 DAYS', '30 DAYS', '90 DAYS', '365 DAYS'];
  selectedNumberOfDays2 = '7 DAYS';

  readonly numberOfDays3 = ['7 DAYS', '30 DAYS', '90 DAYS', '365 DAYS'];
  selectedNumberOfDays3 = '7 DAYS';

  readonly exposure = ['On balance sheet', 'Off balance sheet'];
  selectedExposure = 'On balance sheet';

  constructor() { }

  public labelContent(e: SeriesLabelsContentArgs): string {
    return e.category;
  }

  public crosshair = {
    visible: true,
    tooltip: {
      visible: true,
      format: "#.##",
    },
  };
}
