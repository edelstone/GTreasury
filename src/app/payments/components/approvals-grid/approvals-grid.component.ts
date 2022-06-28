import { Component, ViewChild } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { Approval } from 'src/app/core/model/approval';
import { ActionButton } from 'src/app/shared/components/grid-action-bar/grid-action-bar.component';

@Component({
  selector: 'gt-appovals-grid',
  templateUrl: './approvals-grid.component.html',
  styleUrls: ['./approvals-grid.component.scss']
})
export class ApprovalsGridComponent {

  @ViewChild('approvalsGrid') approvalsGrid: GridComponent;

  approvalData: Approval[] = [
    {
      accountId: '********9012',
      approvalStatus: 'Waiting on approval',
      sendingAccount: 'WF 2098',
      receivingAccount: 'JPMC 2789',
      amount: 400993.21,
      currency: 'USD',
      approvalsNeeded: 4,
      transactionDate: new Date(2022, 1, 18),
      valueDate: new Date(2022, 2, 12),
      processDate: new Date(2022, 2, 14),
    }
  ]
  constructor() { }

  onActionClicked(actionButton: ActionButton) {
    switch (actionButton) {
      case ActionButton.ExportToPdf:
        this.approvalsGrid.saveAsPDF();
        break;
      case ActionButton.ExportToExcel:
        this.approvalsGrid.saveAsExcel();
        break;
      default:
        break;
    }
  }

}
