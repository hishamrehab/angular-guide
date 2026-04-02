import { Component , OnInit , OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit , OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online'; 
    private interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
  this.interval = setInterval(() => {
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
 
   ngOnDestroy() {
    clearTimeout(this.interval);
   }
}
  