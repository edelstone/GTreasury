import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashContainerComponent } from './components/cash-container/cash-container.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: CashContainerComponent}
]

@NgModule({
  declarations: [
    CashContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CashModule { }
