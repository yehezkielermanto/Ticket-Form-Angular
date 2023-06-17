import { Component, inject } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from '../../interfaces/ticket';

@Component({
  selector: 'app-ticket-summary',
  templateUrl: './ticket-summary.component.html',
  styleUrls: ['./ticket-summary.component.css']
})
export class TicketSummaryComponent {
  ticketService: TicketService = inject(TicketService)

  tickets: Ticket[] = []

  constructor(){
    this.tickets = this.ticketService.getTicket()
  }
}
