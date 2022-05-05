import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path:'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'cash', loadChildren: () => import('./cash/cash.module').then(m => m.CashModule) },
  { path: 'financialInstruments', component: TodoComponent },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'reports', component: TodoComponent },
  { path: 'dataManagement', component: TodoComponent },
  { path: 'administration', component: TodoComponent },
  { path:'', redirectTo:'/dashboard', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
