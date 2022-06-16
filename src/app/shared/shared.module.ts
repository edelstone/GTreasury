import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenusModule } from '@progress/kendo-angular-menu';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HeaderTickerComponent } from './components/header/header-ticker/header-ticker.component';
import { HeaderSearchComponent } from './components/header/header-search/header-search.component';
import { HeaderQuickTasksComponent } from './components/header/header-quick-tasks/header-quick-tasks.component';
import { HeaderLanguageSelectorComponent } from './components/header/header-language-selector/header-language-selector.component';
import { HeaderUserComponent } from './components/header/header-user/header-user.component';
import { HeaderSupportComponent } from './components/header/header-support/header-support.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { TabstripComponent } from './components/subheader/tabstrip/tabstrip.component';
import { GridActionBarComponent } from './components/grid-action-bar/grid-action-bar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    HeaderTickerComponent,
    HeaderSearchComponent,
    HeaderQuickTasksComponent,
    HeaderLanguageSelectorComponent,
    HeaderUserComponent,
    HeaderSupportComponent,
    SubheaderComponent,
    TabstripComponent,
    GridActionBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenusModule,
    InputsModule,
    NavigationModule,
    DropDownsModule,
    ButtonsModule,
    LayoutModule,
    IndicatorsModule,

    ClarityModule,
  ],
  exports: [HeaderComponent, SidebarComponent, SubheaderComponent, GridActionBarComponent],
})
export class SharedModule {}
