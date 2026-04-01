import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online'; 
  constructor() {
    setInterval(() => {
      const rnd = Math.random();

      if(rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.8) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
  