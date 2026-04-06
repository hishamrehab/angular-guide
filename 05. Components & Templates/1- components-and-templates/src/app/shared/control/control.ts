import { Component , input  , ViewEncapsulation , contentChild , HostBinding, inject, ElementRef} from '@angular/core';

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
  // @ContentChild('input') private control?: 
  // ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<HTMLInputElement | HTMLTextAreaElement>('input');
    
onClick() {
  console.log('Control clicked');
  console.log(this.el.nativeElement);
  console.log(this.control());
} 
}
