import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsContainerComponent } from './components/payments-container/payments-container.component';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { TodoComponent } from '../todo/todo.component';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SharedModule } from '../shared/shared.module';
import { ApprovalsGridComponent } from './components/approvals-grid/approvals-grid.component';
import { ApprovalsToolbarComponent } from './components/approvals-grid/approvals-toolbar/approvals-toolbar.component';

const routes = [
  {
    path: '',
    component: PaymentsContainerComponent,
    children: [
      { path: 'approvals', component: ApprovalsGridComponent },
      { path: 'extractions', component: TodoComponent },
      { path: 'voids', component: TodoComponent },
      { path: 'in-house-transfers', component: TodoComponent },
      { path: 'history', component: TodoComponent },
      { path: 'all-payments', component: TodoComponent },
      { path: '', redirectTo: 'approvals', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [PaymentsContainerComponent, ApprovalsGridComponent, ApprovalsToolbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GridModule,
    PDFModule,
    ExcelModule,
    DropDownsModule,
    ButtonsModule,
    InputsModule,
    DateInputsModule,
    ClarityModule,
    SharedModule,
  ],
})
export class PaymentsModule {}
