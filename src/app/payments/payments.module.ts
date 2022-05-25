import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsContainerComponent } from './components/payments-container/payments-container.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: PaymentsContainerComponent }];

@NgModule({
  declarations: [PaymentsContainerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PaymentsModule {}
