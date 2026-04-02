import { Component , input  , ViewEncapsulation , HostBinding, inject, ElementRef} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
   host: {
     class: 'control',
    '(click)': 'onClick()'
   },
})
export class Control {
  @HostBinding('class') className = 'control';
  // @HostListener('click') onClick();{}
  label = input.required<string>();
  private el = inject(ElementRef);
    
onClick() {
  console.log('Control clicked');
  console.log(this.el.nativeElement);
} 
}
