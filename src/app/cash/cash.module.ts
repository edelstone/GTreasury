import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CashContainerComponent } from './components/cash-container/cash-container.component';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { WorksheetsComponent } from './components/worksheets/worksheets.component';
import { TodoComponent } from '../todo/todo.component';
import { StatementService } from '../core/services/statement/statement.service';
import { WorksheetsHelperService } from '../core/services/worksheets-helper/worksheets-helper.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { WorksheetsToolbarComponent } from './components/worksheets/worksheets-toolbar/worksheets-toolbar.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SharedModule } from '../shared/shared.module';
const routes = [
  {
    path: '',
    component: CashContainerComponent,
    children: [
      { path: 'worksheets', component: WorksheetsComponent },
      { path: 'forecasts', component: TodoComponent },
      { path: 'balances', component: TodoComponent },
      { path: 'general-ledger', component: TodoComponent },
      { path: 'reconciliations', component: TodoComponent },
      { path: 'statements', component: TodoComponent },
      { path: '', redirectTo: 'worksheets', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    CashContainerComponent,
    WorksheetsComponent,
    WorksheetsToolbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GridModule,
    DropDownsModule,
    ButtonsModule,
    InputsModule,
    DateInputsModule,
    ClarityModule,
    SharedModule,
  ],
  providers: [StatementService, WorksheetsHelperService, DatePipe],
})
export class CashModule {}
