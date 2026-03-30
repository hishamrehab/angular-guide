import { Component } from '@angular/core';
import { Header } from './header/header';
import { ServerStatus } from './dashbaord/server-status/server-status';
import { Traffic } from './dashbaord/traffic/traffic';
import { Tickets } from './dashbaord/tickets/tickets';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ServerStatus, Traffic, Tickets],
  templateUrl: './app.component.html',
})

export class AppComponent {
 
}
