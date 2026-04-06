import { Component , OnInit , DestroyRef , inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit  {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online'; 
  
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
   const interval = setInterval(() => {
      const rnd = Math.random();

      if(rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.8) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
     
    this.destroyRef.onDestroy(() => {
      clearInterval(interval); 
    });
  }
 }
  