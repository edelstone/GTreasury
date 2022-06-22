import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FinancialInstrumentsContainerComponent } from './components/financial-instruments-container/financial-instruments-container.component';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { TodoComponent } from '../todo/todo.component';
import { StatementService } from '../core/services/statement/statement.service';
import { WorksheetsHelperService } from '../core/services/worksheets-helper/worksheets-helper.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { PortfoliosContainerComponent } from './components/portfolios-container/portfolios-container.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SharedModule } from '../shared/shared.module';
import { PortfoliosToolbarComponent } from './components/portfolios-container/portfolios-toolbar/portfolios-toolbar.component';
import { PortfoliosGridComponent } from './components/portfolios-container/portfolios-grid/portfolios-grid.component';
const routes = [
  {
    path: '',
    component: FinancialInstrumentsContainerComponent,
    children: [
      { path: 'portfolios', component: PortfoliosContainerComponent },
      { path: 'risk-analysis', component: TodoComponent },
      { path: 'hedge-accounting', component: TodoComponent },
      { path: 'assets-and-liability', component: TodoComponent },
      { path: 'facilities', component: TodoComponent },
      { path: 'fraud', component: TodoComponent },
      { path: '', redirectTo: 'portfolios', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    FinancialInstrumentsContainerComponent,
    PortfoliosContainerComponent,
    PortfoliosToolbarComponent,
    PortfoliosGridComponent
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
export class FinancialInstrumentsModule {}
