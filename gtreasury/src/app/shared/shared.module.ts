import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { MenusModule } from '@progress/kendo-angular-menu';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { NavigationBarTickerComponent } from './components/navigation-bar/navigation-bar-ticker/navigation-bar-ticker.component';
import { NavigationBarSearchComponent } from './components/navigation-bar/navigation-bar-search/navigation-bar-search.component';
import { NavigationBarQuickTasksComponent } from './components/navigation-bar/navigation-bar-quick-tasks/navigation-bar-quick-tasks.component';
import { NavigationBarLanguageSelectorComponent } from './components/navigation-bar/navigation-bar-language-selector/navigation-bar-language-selector.component';
import { NavigationBarUserComponent } from './components/navigation-bar/navigation-bar-user/navigation-bar-user.component';
import { NavigationBarSupportComponent } from './components/navigation-bar/navigation-bar-support/navigation-bar-support.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';



@NgModule({
  declarations: [
    LeftNavigationComponent,
    NavigationBarComponent,
    NavigationBarTickerComponent,
    NavigationBarSearchComponent,
    NavigationBarQuickTasksComponent,
    NavigationBarLanguageSelectorComponent,
    NavigationBarUserComponent,
    NavigationBarSupportComponent
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
    
    ClarityModule
  ],
  exports: [
    NavigationBarComponent,
    LeftNavigationComponent
  ]
})
export class SharedModule { }
