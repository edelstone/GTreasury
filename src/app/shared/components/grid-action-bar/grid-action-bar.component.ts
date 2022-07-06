import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';

export enum ActionButton {
  ExportToPdf,
  ExportToExcel,
  ExportToBarChart,
  Save,
  Delete
}

/*
  This component uses Input and Output variables for parent/child communication.
  You could also use a service with rxjs.
  https://angular.io/guide/component-interaction
*/
@Component({
  selector: 'gt-grid-action-bar',
  templateUrl: './grid-action-bar.component.html',
  styleUrls: ['./grid-action-bar.component.scss']
})
export class GridActionBarComponent {
  @Input() targetGrid: GridComponent;
  @Input() showSave: boolean = false;
  @Input() showDelete: boolean = false;
  @Input() showBarChart: boolean = false;
  @Input() viewOptions: {text: string, value: number}[] = [];
  @Input() itemButton?: {text: string} = undefined;

  actionButton = ActionButton;

  readonly defaultItem = {
    text: "Choose view",
    value: null,
  };

  constructor() { }

  actionButtonClicked(actionButton: ActionButton) {
    // // This handles the action button that was clicked. The view drop down
    // // and the "New" button can be handled the same way.
    // this.actionClicked.emit(actionButton);

    // https://www.telerik.com/kendo-angular-ui/components/grid/export/pdf-export/#toc-triggering-export-externally
    // https://www.telerik.com/kendo-angular-ui/components/grid/export/excel-export/#toc-triggering-export-externally
    if (this.targetGrid) {
      switch (actionButton) {
        case ActionButton.ExportToPdf:
          this.targetGrid.saveAsPDF();
          break;
        case ActionButton.ExportToExcel:
          this.targetGrid.saveAsExcel();
          break;
        default:
          break;
      }
    }
  }

}
