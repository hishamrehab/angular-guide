import { Component , OnInit , DestroyRef , inject , signal , effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
 
export class ServerStatus implements OnInit  {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline') ; 

  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
   const interval = setInterval(() => {
      const rnd = Math.random();

      if(rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.8) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

     
    this.destroyRef.onDestroy(() => {
      clearInterval(interval); 
    });
  }
 }
  