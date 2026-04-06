import { Component } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button , FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
  imports: [FormsModule , Button],
})

export class NewTicket {
  onSubmit(title: string, ticketText : string) {
    console.log(title);
    console.log(ticketText);
  }
}

