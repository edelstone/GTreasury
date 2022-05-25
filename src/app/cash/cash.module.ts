import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CashContainerComponent } from './components/cash-container/cash-container.component';
import { RouterModule } from '@angular/router';
import { CashToolbarComponent } from './components/cash-container/cash-toolbar/cash-toolbar.component';
import { ClarityModule } from '@clr/angular';
import { CashTabstripComponent } from './components/cash-container/cash-tabstrip/cash-tabstrip.component';
import { WorksheetsComponent } from './components/worksheets-container/worksheets/worksheets.component';
import { TodoComponent } from '../todo/todo.component';
import { StatementService } from '../core/services/statement/statement.service';
import { WorksheetsHelperService } from '../core/services/worksheets-helper/worksheets-helper.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { WorksheetsToolbarComponent } from './components/worksheets-container/worksheets-toolbar/worksheets-toolbar.component';
import { WorksheetsContainerComponent } from './components/worksheets-container/worksheets-container.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

const routes = [
  {
    path: '',
    component: CashContainerComponent,
    children: [
      { path: 'worksheets', component: WorksheetsContainerComponent },
      { path: 'forecasts', component: TodoComponent },
      { path: 'balances', component: TodoComponent },
      { path: 'generalLedger', component: TodoComponent },
      { path: 'reconciliations', component: TodoComponent },
      { path: 'statements', component: TodoComponent },
      { path: '', redirectTo: 'worksheets', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    CashContainerComponent,
    CashToolbarComponent,
    CashTabstripComponent,
    WorksheetsComponent,
    WorksheetsToolbarComponent,
    WorksheetsContainerComponent,
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
  ],
  providers: [StatementService, WorksheetsHelperService, DatePipe],
})
export class CashModule {}
