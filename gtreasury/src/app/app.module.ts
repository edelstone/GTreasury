import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { FilterModule } from '@progress/kendo-angular-filter';
import { GridModule } from '@progress/kendo-angular-grid';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ListBoxModule } from '@progress/kendo-angular-listbox';
import { MenusModule } from '@progress/kendo-angular-menu';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { PagerModule } from '@progress/kendo-angular-pager';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PopupModule } from '@progress/kendo-angular-popup';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { TypographyModule } from '@progress/kendo-angular-typography';

import { SharedModule } from 'src/app/shared/shared.module';
import { ClarityModule } from '@clr/angular';
import { TodoComponent } from './todo/todo.component';
// import { SharedModule } from '@progress/kendo-angular-dialog/shared.module';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    DateInputsModule,
    ButtonsModule,
    DialogsModule,
    DropDownsModule,
    ExcelExportModule,
    FilterModule,
    GridModule,
    IconsModule,
    IndicatorsModule,
    InputsModule,
    LabelModule,
    LayoutModule,
    ListBoxModule,
    MenusModule,
    NavigationModule,
    NotificationModule,
    PagerModule,
    PDFExportModule,
    PopupModule,
    SortableModule,
    ToolBarModule,
    TooltipsModule,
    TypographyModule,
    ClarityModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
