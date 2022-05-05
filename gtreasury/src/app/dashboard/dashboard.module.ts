import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: DashboardContainerComponent}
]

@NgModule({
  declarations: [
    DashboardContainerComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
