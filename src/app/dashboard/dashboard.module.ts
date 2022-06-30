import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardToolbarComponent } from './components/dashboard-container/dashboard-toolbar/dashboard-toolbar.component';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from "@progress/kendo-angular-charts";
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ClarityModule } from '@clr/angular';
import { MenusModule } from '@progress/kendo-angular-menu';
import { DashboardTileLayoutComponent } from './components/dashboard-container/dashboard-tile-layout/dashboard-tile-layout.component';

const routes = [{ path: '', component: DashboardContainerComponent }];

@NgModule({
  declarations: [DashboardContainerComponent, DashboardToolbarComponent, DashboardTileLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    DropDownsModule,
    ButtonsModule,
    InputsModule,
    ChartsModule,
    LayoutModule,
    DateInputsModule,
    MenusModule,
    ClarityModule,
    SharedModule,
  ]
})
export class DashboardModule {}
