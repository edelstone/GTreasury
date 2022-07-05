import { Component, ViewChild } from '@angular/core';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { GridComponent } from '@progress/kendo-angular-grid';
import { process } from "@progress/kendo-data-query";
import { Approval } from 'src/app/core/model/approval';

@Component({
  selector: 'gt-appovals-grid',
  templateUrl: './approvals-grid.component.html',
  styleUrls: ['./approvals-grid.component.scss']
})
export class ApprovalsGridComponent {
  @ViewChild('approvalsGrid') approvalsGrid: GridComponent;

  approvalData: Approval[] = [
    {
      accountId: '*******3045',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'WF 2098',
      receivingAccount: 'JPMC 2789',
      amount: 400993.21,
      currency: 'USD',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 18),
      valueDate: new Date(2022, 7, 12),
      processDate: new Date(2022, 7, 14),
    },
    {
      accountId: '*******2901',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'JPMC 1289',
      receivingAccount: 'JPMC 2789',
      amount: 20872.77,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 16),
      valueDate: new Date(2022, 7, 1),
      processDate: new Date(2022, 7, 3),
    },
    {
      accountId: '*******0395',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CAG 2801',
      receivingAccount: 'JPMC 2789',
      amount: 7002109.33,
      currency: 'EUR',
      approvalsNeeded: 1,
      transactionDate: new Date(2022, 6, 15),
      valueDate: new Date(2022, 7, 1),
      processDate: new Date(2022, 7, 3),
    },
    {
      accountId: '*******7450',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'BOFA 2217',
      amount: 1298826.33,
      currency: 'EUR',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 14),
      valueDate: new Date(2022, 6, 14),
      processDate: new Date(2022, 6, 19),
    },
    {
      accountId: '*******1096',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'HSBC 2678',
      receivingAccount: 'BOFA 2217',
      amount: 9102.0,
      currency: 'EUR',
      approvalsNeeded: 3,
      transactionDate: new Date(2022, 6, 11),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******9265',
      approvalStatus: 'Rejected',
      sendingAccount: 'VG 2889',
      receivingAccount: 'JPMC 2789',
      amount: 209881.76,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 10),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******9993',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'JPMC 3333',
      amount: 21.99,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 10),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******2647',
      approvalStatus: 'Rejected',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'BOFA 2217',
      amount: 14298.0,
      currency: 'USD',
      approvalsNeeded: 3,
      transactionDate: new Date(2022, 6, 9),
      valueDate: new Date(2022, 6, 9),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******2876',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'HSBC 2678',
      receivingAccount: 'BOFA 2217',
      amount: 222000.0,
      currency: 'EUR',
      approvalsNeeded: 1,
      transactionDate: new Date(2022, 6, 9),
      valueDate: new Date(2022, 6, 9),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******0001',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'VG 2889',
      receivingAccount: 'BOFA 2217',
      amount: 12391.0,
      currency: 'USD',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 8),
      valueDate: new Date(2022, 6, 8),
      processDate: new Date(2022, 6, 12),
    },
    {
      accountId: '*******9928',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'WF 2098',
      receivingAccount: 'JPMC 2789',
      amount: 400993.21,
      currency: 'USD',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 18),
      valueDate: new Date(2022, 7, 12),
      processDate: new Date(2022, 7, 14),
    },
    {
      accountId: '*******1172',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'JPMC 1289',
      receivingAccount: 'JPMC 2789',
      amount: 20872.77,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 16),
      valueDate: new Date(2022, 7, 1),
      processDate: new Date(2022, 7, 3),
    },
    {
      accountId: '*******3764',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CAG 2801',
      receivingAccount: 'JPMC 2789',
      amount: 7002109.33,
      currency: 'EUR',
      approvalsNeeded: 1,
      transactionDate: new Date(2022, 6, 15),
      valueDate: new Date(2022, 7, 1),
      processDate: new Date(2022, 7, 3),
    },
    {
      accountId: '*******2847',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'BOFA 2217',
      amount: 1298826.33,
      currency: 'EUR',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 14),
      valueDate: new Date(2022, 6, 14),
      processDate: new Date(2022, 6, 19),
    },
    {
      accountId: '*******0175',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'HSBC 2678',
      receivingAccount: 'BOFA 2217',
      amount: 9102.0,
      currency: 'EUR',
      approvalsNeeded: 3,
      transactionDate: new Date(2022, 6, 11),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******4447',
      approvalStatus: 'Rejected',
      sendingAccount: 'VG 2889',
      receivingAccount: 'JPMC 2789',
      amount: 209881.76,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 10),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******3827',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'JPMC 3333',
      amount: 21.99,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 10),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******2829',
      approvalStatus: 'Rejected',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'BOFA 2217',
      amount: 14298.0,
      currency: 'USD',
      approvalsNeeded: 3,
      transactionDate: new Date(2022, 6, 9),
      valueDate: new Date(2022, 6, 9),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******2878',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'HSBC 2678',
      receivingAccount: 'BOFA 2217',
      amount: 222000.0,
      currency: 'EUR',
      approvalsNeeded: 1,
      transactionDate: new Date(2022, 6, 9),
      valueDate: new Date(2022, 6, 9),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******8837',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'VG 2889',
      receivingAccount: 'BOFA 2217',
      amount: 12391.0,
      currency: 'USD',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 8),
      valueDate: new Date(2022, 6, 8),
      processDate: new Date(2022, 6, 12),
    },{
      accountId: '*******2702',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'WF 2098',
      receivingAccount: 'JPMC 2789',
      amount: 400993.21,
      currency: 'USD',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 18),
      valueDate: new Date(2022, 7, 12),
      processDate: new Date(2022, 7, 14),
    },
    {
      accountId: '*******3333',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'JPMC 1289',
      receivingAccount: 'JPMC 2789',
      amount: 20872.77,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 16),
      valueDate: new Date(2022, 7, 1),
      processDate: new Date(2022, 7, 3),
    },
    {
      accountId: '*******1000',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CAG 2801',
      receivingAccount: 'JPMC 2789',
      amount: 7002109.33,
      currency: 'EUR',
      approvalsNeeded: 1,
      transactionDate: new Date(2022, 6, 15),
      valueDate: new Date(2022, 7, 1),
      processDate: new Date(2022, 7, 3),
    },
    {
      accountId: '*******3777',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'BOFA 2217',
      amount: 1298826.33,
      currency: 'EUR',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 14),
      valueDate: new Date(2022, 6, 14),
      processDate: new Date(2022, 6, 19),
    },
    {
      accountId: '*******2903',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'HSBC 2678',
      receivingAccount: 'BOFA 2217',
      amount: 9102.0,
      currency: 'EUR',
      approvalsNeeded: 3,
      transactionDate: new Date(2022, 6, 11),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******1088',
      approvalStatus: 'Rejected',
      sendingAccount: 'VG 2889',
      receivingAccount: 'JPMC 2789',
      amount: 209881.76,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 10),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******0012',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'JPMC 3333',
      amount: 21.99,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 10),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******3667',
      approvalStatus: 'Rejected',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'BOFA 2217',
      amount: 14298.0,
      currency: 'USD',
      approvalsNeeded: 3,
      transactionDate: new Date(2022, 6, 9),
      valueDate: new Date(2022, 6, 9),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******6662',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'HSBC 2678',
      receivingAccount: 'BOFA 2217',
      amount: 222000.0,
      currency: 'EUR',
      approvalsNeeded: 1,
      transactionDate: new Date(2022, 6, 9),
      valueDate: new Date(2022, 6, 9),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******2748',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'VG 2889',
      receivingAccount: 'BOFA 2217',
      amount: 12391.0,
      currency: 'USD',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 8),
      valueDate: new Date(2022, 6, 8),
      processDate: new Date(2022, 6, 12),
    },
    {
      accountId: '*******2989',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'WF 2098',
      receivingAccount: 'JPMC 2789',
      amount: 400993.21,
      currency: 'USD',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 18),
      valueDate: new Date(2022, 7, 12),
      processDate: new Date(2022, 7, 14),
    },
    {
      accountId: '*******1099',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'JPMC 1289',
      receivingAccount: 'JPMC 2789',
      amount: 20872.77,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 16),
      valueDate: new Date(2022, 7, 1),
      processDate: new Date(2022, 7, 3),
    },
    {
      accountId: '*******1098',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CAG 2801',
      receivingAccount: 'JPMC 2789',
      amount: 7002109.33,
      currency: 'EUR',
      approvalsNeeded: 1,
      transactionDate: new Date(2022, 6, 15),
      valueDate: new Date(2022, 7, 1),
      processDate: new Date(2022, 7, 3),
    },
    {
      accountId: '*******1097',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'BOFA 2217',
      amount: 1298826.33,
      currency: 'EUR',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 14),
      valueDate: new Date(2022, 6, 14),
      processDate: new Date(2022, 6, 19),
    },
    {
      accountId: '*******4444',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'HSBC 2678',
      receivingAccount: 'BOFA 2217',
      amount: 9102.0,
      currency: 'EUR',
      approvalsNeeded: 3,
      transactionDate: new Date(2022, 6, 11),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******1771',
      approvalStatus: 'Rejected',
      sendingAccount: 'VG 2889',
      receivingAccount: 'JPMC 2789',
      amount: 209881.76,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 10),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******2388',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'JPMC 3333',
      amount: 21.99,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 10),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******2996',
      approvalStatus: 'Rejected',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'BOFA 2217',
      amount: 14298.0,
      currency: 'USD',
      approvalsNeeded: 3,
      transactionDate: new Date(2022, 6, 9),
      valueDate: new Date(2022, 6, 9),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******1012',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'HSBC 2678',
      receivingAccount: 'BOFA 2217',
      amount: 222000.0,
      currency: 'EUR',
      approvalsNeeded: 1,
      transactionDate: new Date(2022, 6, 9),
      valueDate: new Date(2022, 6, 9),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******1093',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'VG 2889',
      receivingAccount: 'BOFA 2217',
      amount: 12391.0,
      currency: 'USD',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 8),
      valueDate: new Date(2022, 6, 8),
      processDate: new Date(2022, 6, 12),
    },
    {
      accountId: '*******3761',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'JPMC 3333',
      amount: 21.99,
      currency: 'USD',
      approvalsNeeded: 2,
      transactionDate: new Date(2022, 6, 10),
      valueDate: new Date(2022, 6, 11),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******2916',
      approvalStatus: 'Rejected',
      sendingAccount: 'CITI 0900',
      receivingAccount: 'BOFA 2217',
      amount: 14298.0,
      currency: 'USD',
      approvalsNeeded: 3,
      transactionDate: new Date(2022, 6, 9),
      valueDate: new Date(2022, 6, 9),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******0285',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'HSBC 2678',
      receivingAccount: 'BOFA 2217',
      amount: 222000.0,
      currency: 'EUR',
      approvalsNeeded: 1,
      transactionDate: new Date(2022, 6, 9),
      valueDate: new Date(2022, 6, 9),
      processDate: new Date(2022, 6, 13),
    },
    {
      accountId: '*******2093',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'VG 2889',
      receivingAccount: 'BOFA 2217',
      amount: 12391.0,
      currency: 'USD',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 6, 8),
      valueDate: new Date(2022, 6, 8),
      processDate: new Date(2022, 6, 12),
    }
  ]
  // Bind 'this' explicitly to capture the execution context of the component.
  constructor() {
    this.allData = this.allData.bind(this);
  }

  // By default, the Grid exports its current data. To export data that is different
  // from the current Grid data, specify a custom fetchData function. It returns an
  // ExcelExportData value or array.
  public allData(): ExcelExportData {
    const result: ExcelExportData = {
      data: process(this.approvalData, {}).data
    };

    return result;
  }

}
