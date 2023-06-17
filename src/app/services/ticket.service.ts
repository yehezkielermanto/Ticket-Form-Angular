import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }
  ticket: Ticket[] = [];

  // --- function add ticket to array
  addTicket(ticket: any): any{
    // clear previous value
    while(this.ticket.length > 0){
      this.ticket.pop();
    }
    return this.ticket.push(ticket);
  }

  // --- function get ticket from array
  getTicket(): Ticket[]{
    return this.ticket;
  }
}
