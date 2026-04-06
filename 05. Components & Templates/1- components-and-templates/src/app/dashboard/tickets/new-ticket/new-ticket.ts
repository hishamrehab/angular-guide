import { Component, ViewChild  , ElementRef } from '@angular/core';
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
  @ViewChild('form') form?: ElementRef<HTMLFormElement>; 

  onSubmit(title: string, ticketText : string ) {
    console.log(title);
    console.log(ticketText);
    this.form?.nativeElement.reset();
  }
}

