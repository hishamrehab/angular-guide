import { Component } from '@angular/core';
import { NewTicket } from '../../dashboard/tickets/new-ticket/new-ticket';
import { Ticket } from '../../dashboard/tickets/ticket/ticket';


@Component({
  selector: 'app-tickets',
  imports: [NewTicket , Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
 tickets: Ticket[] = [];
 
 onAdd(ticketData: {title: string; text: string}) {
  const ticket: Ticket = {
    id: Math.random().toString() ,
    title: ticketData.title,
    request: ticketData.text,
    status: 'open',
  }
  this.tickets.push(ticket);
 }
 
} 
