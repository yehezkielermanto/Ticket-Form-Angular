import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketSummaryComponent } from './components/ticket-summary/ticket-summary.component'
import { TicketFormComponent } from './components/ticket-form/ticket-form.component'

const routes: Routes = [
  {path: '', redirectTo: 'form', pathMatch: 'full'},
  {path: 'form', component: TicketFormComponent},
  {path: 'summary', component: TicketSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
