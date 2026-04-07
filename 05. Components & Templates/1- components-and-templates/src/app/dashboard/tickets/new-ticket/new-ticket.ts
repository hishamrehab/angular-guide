import { Component, ViewChild , AfterViewInit  } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button , FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
  imports: [FormsModule , Button],
})

export class NewTicket implements OnInit , AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>; 
  //  private form = viewChild.required<HTMLFormElement>('form');

   ngOnInit() {
    console.log('OnInit');
    console.log(this.form?.nativeElement);
   }

   ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log(this.form?.nativeElement);
  }
   

  onSubmit(title: string, ticketText : string ) {
    console.log(title);
    console.log(ticketText); 
  
    this.form?.nativeElement.reset();
  }
}

