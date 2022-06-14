import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'dashboard', component: TodoComponent },
  {
    path: 'cash',
    loadChildren: () => import('./cash/cash.module').then((m) => m.CashModule),
  },
  { path: 'financialInstruments', component: TodoComponent },
  { path: 'payments', component: TodoComponent },
  { path: 'reports', component: TodoComponent },
  { path: 'dataManagement', component: TodoComponent },
  { path: 'administration', component: TodoComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
